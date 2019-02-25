---
title: "How I build a chat app with React, TypeScript and Socket.io (part 2)"
date: "2019-02-23"
---

![How I build a chat app with React, TypeScript and Socket.io (part 1)](../how-i-build-chat-app-with-react-and-typescript-part1/how-i-build-a-chat-app-head.jpeg)
###### Photo by [Steve Halama](https://unsplash.com/photos/Yhc7YGZlz3g?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/coding-chat-application?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)


## TL;DR
This is the second part of a thorough step-by-step guide for building a single page chat application using React, TypeScript and Socket.io. If you want to take a look at the other chapters, here you go:
 - [Part I](https://mihail-gaberov.eu/how-i-build-chat-app-with-react-and-typescript-part1/)
 - [Part III](https://mihail-gaberov.eu/how-i-build-chat-app-with-react-and-typescript-part3/)
 - [Part IV](https://mihail-gaberov.eu/how-i-build-chat-app-with-react-and-typescript-part4/)

If you want to skip the reading, here 💁 is the GitHub repository with a detailed README 🙌, and here you can check the live demo. 🎀 In order to play with it, you need to open it in two different browsers (or browser tabs) or devices (you may use your computer and your smartphone) and chat with each other.🎀

---

## More detailed planing
In this section we need to have a deeper look at our application and define what would be the building blocks of it. Since we are going to use React and we know that in the React world the term _component_ is widely used, we may refer to our building blocks as components. We will have components responsible for purely visual stuff, as well as such for managing the local storage for example.

Let's try to imagine mentally how our app will look in the end and what would be the components it will need. What we already know is this:

### Server part
We will need a http server that will take care of starting the server and handling interactions with Socket.io (sending and receiving messages). Our server logic will be simple enough to live in only one file. You can see the actual implementation [here](https://github.com/mihailgaberov/chat/blob/master/server/index.js).

### Client part
Here we need to have all the visual controls, plus means for managing interactions with local storage, where we will save the user preferences, as well as handling of the translations and color themes.

Now it is a good moment to point out that for implementing the [translations and theming](https://github.com/mihailgaberov/chat/blob/master/src/utilities/TranslationsProvider.tsx) functionality in the app, I have used [React Context API](https://reactjs.org/docs/context.html). Also, since I knew I will have to deal with [Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage), I did [another round](https://github.com/mihailgaberov/misc/tree/master/manage-local-storage-with-typescript) of "research-test-play" trip. And the output of it was that I already had a [nice service](https://github.com/mihailgaberov/chat/blob/master/src/utilities/localStorageService.ts), which provides all the functionalities I needed.
