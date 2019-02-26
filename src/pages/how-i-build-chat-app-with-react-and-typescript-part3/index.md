---
title: "How I build a chat app with React, TypeScript and Socket.io (part 3)"
date: "2019-02-24"
---

![How I build a chat app with React, TypeScript and Socket.io (part 3)](../how-i-build-chat-app-with-react-and-typescript-part1/how-i-build-a-chat-app-head.jpeg)
###### Photo by [Steve Halama](https://unsplash.com/photos/Yhc7YGZlz3g?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/coding-chat-application?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)


## TL;DR
This is the second part of a thorough step-by-step guide for building a single page chat application using React, TypeScript and Socket.io. If you want to take a look at the other chapters, here you go:
 - [Part I](https://mihail-gaberov.eu/how-i-build-chat-app-with-react-and-typescript-part1/)
 - [Part II](https://mihail-gaberov.eu/how-i-build-chat-app-with-react-and-typescript-part2/)
 - [Part IV](https://mihail-gaberov.eu/how-i-build-chat-app-with-react-and-typescript-part4/)

If you want to skip the reading, [here](https://github.com/mihailgaberov/chat) 💁 is the GitHub repository with a detailed [README](https://github.com/mihailgaberov/chat/blob/master/README.md) 🙌, and [here](https://mihails-chat.herokuapp.com/#/chat) you can check the live demo. 🎀 In order to play with it, you need to open it in two different browsers (or browser tabs) or devices (you may use your computer and your smartphone) and chat with each other.🎀

---
## Redux State Management
Here we will talk about how our app state is being managed by using Redux and socket middleware.

### Store
Our [store](https://github.com/mihailgaberov/chat/blob/master/src/store/index.ts) is going to be relatively simple. We will have only two reducers defining a piece of the state reserved for the socket state and for the messages state. This is also where we apply our middleware. If you are familiar with [Redux Saga](https://redux-saga.js.org/) package, you have probably seen this pattern of applying custom middleware when using Redux. Something like this:

```jsx
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers'
import mySaga from './sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
```
But in our case it would be like that:
```jsx
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import socketReducer from './socket/reducer';
import messageReducer from './message/reducer';
import socketMiddleware from './socket/middleware';

const rootReducer = combineReducers({
  socketState: socketReducer,
  messageState: messageReducer
});

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const index = {
  ...createStore(rootReducer, composeEnhancers(applyMiddleware(socketMiddleware)))
};

export default index;
```

### Message
After defining our store, it's time to see how are we going to handle the messaging in Redux. We have defined our [actions](https://github.com/mihailgaberov/chat/blob/master/src/store/message/actions/index.ts) here and our [messageReducer](https://github.com/mihailgaberov/chat/blob/master/src/store/message/reducer/index.ts) here.

 - __Actions__  -  here we define the main actions needed for sending and receiving messages, as well as changing the user name.
 - __Reducer__ - here is where our messageReducer function lives and where we define what happens when one of the actions above is dispatched.
 
 ### Socket
 
We follow the same logic as above here. We have our [socket actions](https://github.com/mihailgaberov/chat/blob/master/src/store/socket/actions/index.ts), the [middleware](https://github.com/mihailgaberov/chat/tree/master/src/store/socket/middleware) I mentioned above, and the [socketReducer](https://github.com/mihailgaberov/chat/blob/master/src/store/socket/reducer/index.ts).

 -  __Actions__ - contains actions for connecting the socket (the one dispatched from the Navigation component in the beginning when the application is started) and one for when the connection status is changed, i.e. showing if we are connected or not.
  - __Middleware__ - contains implementation of a simple socket middleware, which provides us with the minimum functionality we need in our chat app.
  - __Reducer__ - here is where our socketReducer function lives and where we define what happens when one of the actions above is dispatched.
