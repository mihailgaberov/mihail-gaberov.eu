---
title: "How I build a chat app with React, TypeScript and Socket.io (part 1)"
date: "2019-02-22"
---

![How I build a chat app with React, TypeScript and Socket.io (part 1)](./how-i-build-a-chat-app-head.jpeg)
###### Photo by [Steve Halama](https://unsplash.com/photos/Yhc7YGZlz3g?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/coding-chat-application?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)


## TL;DR
This is the first part of a thorough step-by-step guide for building a single page chat application using React, TypeScript and Socket.io. If you want to take a look at the other chapters, here you go:
 - [Part II](https://mihail-gaberov.eu/how-i-build-chat-app-with-react-and-typescript-part2/)
 - [Part III](https://mihail-gaberov.eu/how-i-build-chat-app-with-react-and-typescript-part3/)
 - [Part IV](https://mihail-gaberov.eu/how-i-build-chat-app-with-react-and-typescript-part4/)

If you want to skip the reading, [here](https://github.com/mihailgaberov/chat) 💁 is the GitHub repository with a detailed [README](https://github.com/mihailgaberov/chat/blob/master/README.md) 🙌, and [here](https://mihails-chat.herokuapp.com/#/chat) you can check the live demo. 🎀 In order to play with it, you need to open it in two different browsers (or browser tabs) or devices (you may use your computer and your smartphone) and chat with each other.🎀

---

## Research
When you are about to start a new project it's a good practice to do initial research about the technical stack you are planning to use. In other words, you may want or need, especially if you don't have prior experience with it, to investigate on each technology you will be using. I recommend to do that separately. Take one of the them and create a small app that you can play with. If you need to check how the integration of two or more technologies is going to work in a real project, then you might want to include them all together in your "research-test-play" app, but preferably do your researches one at a time.


### Getting to the point
When I started thinking about making this [chat application](http://mihails-chat.herokuapp.com), I did exactly what I described above. I haven't had recent experience with [TypeScript](http://www.typescriptlang.org/) and none with [Socket.io](https://socket.io/), so I had to take a look at those and get myself familiarized with what is their current state. As my plan was to use [React](https://reactjs.org/) as a main UI library, I needed to see how is it going to work with the other guys in the equation. So I did. I created two small applications (repos [here](https://github.com/mihailgaberov/playing-with-socketio) and [here](https://github.com/mihailgaberov/react-contextapi-with-typescript)) with these technologies, just to be able to play with them and learn how can I use them in my future chat application.
 
 After my initial research was done I was able to start thinking and planing the implementation of my main chat app.
 
![Research done](./1.jpeg)
###### Photo by [Hutomo Abrianto](https://unsplash.com/photos/3TRdlKU-3II?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/research-done?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
---
## High level planing
Usually what people mean when they say "_high level plan_" is that they are looking for the _big picture_. Which means we need to create a rough plan of our execution and to define our main pillars, but without going into to much details. Now when we have clear idea of what to do, let's start doing it! 👷

Note: _From this point forward I will be assuming that you are following my steps as I describe them, hence I will be writing in 'we' form._ 👨

### Tech stack
We already mention the main technologies we will be using, but let's define a proper list of all of them here:
 - [React with TypeScript](https://github.com/Microsoft/TypeScript-React-Starter#create-our-new-project) (create-react-app my-app --scripts-version=react-scripts-ts) - an UI library we will use for building our application's user interfaces.
 - [Redux](https://redux.js.org/) - a state management library we will use for managing our application's state.
 - [Express.js](https://expressjs.com/) - Node.js web application framework we will use for creating a http server that we will need in our application, in order to take advantage of Socket.io engine.
 - [Socket.io](https://socket.io/) -a JavaScript library for realtime web applications. It enables realtime, bi-directional communication between web clients and servers. We will use it to implement a simple chat behavior in our app.
 - [styled-components ](https://www.styled-components.com/)- a small library that we will be using for adding styles to our app and make the look and feel beautiful. It utilizes tagged template literals to style your components and removes the mapping between components and styles. This means that when you're defining your styles, you're actually creating a normal React component, that has your styles attached to it.
 - [Jest](https://jestjs.io/)/[Enzyme ](https://airbnb.io/enzyme/)- a JavaScript Testing Framework and a JavaScript Testing Utility that we will be using to write unit tests for our application. Both have great integration into the React ecosystem and are heavily used in real projects.

### Application Features
In this section we will describe what are the features of our application going to be. 

Every time when we plan a new project, we must define certain criteria which will describe some level of completion, when met. In other words, we need to set a limit point which, once reached, will show that our project is completed or at least its first version. There is a famous saying, that could be matched to the issue with the "never ending" projects:

>_"A good plan today is better than a perfect plan tomorrow." - or we may say that a working project today is better than a perfect project tomorrow._

Here is my list with the features I wanted to implement initially:

#### Header

 - 💡 Chat tab - blinking when new message is received until is read, i.e. when the user is on Settings page
 - 💡 Settings tab
 - 💡 Unread messages counter
 - 💡 Font Awesome icons

#### Chat page

 - 💡 Chat area (includes left aligned and right aligned messages)
 - 💡 Message (text, datetime, left or right depending on if it's received or sent)
 - 💡 Showing the nickname only of the sender
 - 💡 Message sender - input field and button. Input is cleared and focused when button is clicked
 - 💡 Send messages with CTRL+ENTER
 - 💡 Auto scroll to bottom when the chat area is not enough to show all messages

#### Settings page
 - 💡 UserProfile component - possibility to change user name
 - 💡 Interface color component - change the color theme of the app
 - 💡 ClockDisplay component - change the time mode 12h or 24h, shown with each message
 - 💡 Send messages with Ctrl+Enter - On/Off
 - 💡 LanguageSwitcher - drop down menu allowing changing the language of the app (currently English and Deutsch are supported)
 - 💡 Reset button - resets all settings stored to local storage

#### Improvements
At the time of writing this, there are still some pending features I would like to implement. Below is the list of all improvements I did or plan to do in future (the ones with the thumb emoji are already implemented):
Add video chat feature.
 - 👍 Added AM/PM time formatting for when 12h mode is selected.
 - 👍 Added possibility to send message via ENTER by default. If the setting to send messages with CTRL+ENTER is ON, then this is going to be the only way (except via mouse/touch of course).
- 👍 Optimized for iDevices (media queries).
- 👍 Fix blinking/active class for the Chat tab issue - related to React Router not able to properly re-render connected components https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/blocked-updates.md
- 👍 Clear input field when new message is sent.
- 👍 Auto scroll to bottom main chat area when new messages exceed available space.
- 👍 Prevent 'doubling messages' (or multiple messages duplicates when more clients are connected).
- 👍 Add unit tests for the react components.
- Add unit tests for redux stuff - reducers, store, action creators.
- 👍 Add media queries for responsiveness - test and adjust on more devices.
- 👍 Add demo to heroku.
- 👍 Add nice how-to in README.
- Add animations for the messages.
- Add sounds (with options to turn on/off in settings).
- Add more color themes.
- Add welcome message (broadcasts when a new user is connected).
- 👍 Add icons (use Font Awesome).
- History of all the conversations.
- Handle case when socket's connection state change (visually).
- Handle case when there has been a socket error.
- Handle case when a very long word (without) spaces is entered and it goes beyond the message background color.
- 👍 Emoticons support - such as :D, :P, :), ;), 😉, ❤️, etc.
- 👍 Link Parser - Youtube link (embedded video should appear), link to an image (embedded image should appear), all other links should appear as anchor.

When we know the initial plan and the requirements we need to fulfil, we can do our high level analyses. Out app will have two pages, Chat and Settings, accessible via tab controls. The chat page will contain the main chat area with the controls needed to send messages (input field and a button). The settings page will contain few controls for selecting the options described above. With that in mind we can go to the next chapter where we will create a more detailed plan before the actual implementation.

I think this is enough for the first part of this tutorial. We will continue with the detailed planning in the [second part](https://mihail-gaberov.eu/how-i-build-chat-app-with-react-and-typescript-part2/).

🔥 Thanks for reading! 🔥
