---
title: "How I build a desktop chat app with CometChat and NW.js (and how you can too)"
date: "2019-09-17"
---

This is not your typical "_paste this here_" and "_paste that there_"-type tutorial (you can find plenty of those here on [cometchat.com/tutorials](https://www.cometchat.com/tutorials/desktop-chat-app-tutorial/https//cometchat.com/tutorials)). While those tutorials certainly have merit, I am going to share my thought process from beginning to end.

The application I built is simple enough. When someone loads the app, they are prompted to enter their username and begin chatting:

![Welcome Screen](./welcome-screen.png)

![Chat Screen](./chat-screen.png)

The application ultimately runs on Node with help from NW.js (previously known as node-webkit). NW.js is advantageous because it enables us to code cross-platform desktop applications using our favorite web technologies. For this application, I chose to use React and Redux.

The back-end logic - from sending and receiving messages in real-time to populating what I call the "participant list" - is powered by CometChat. You will learn more about [CometChat](https://cometchat.com/pro) as you read on.

This post is not intended to be a walkthrough. Although I will be explaining the technical components of this application, my main ambition is to help you think through a solution from beginning to end. Hopefully, when you finish this post you'll be a slightly better developer and consider CometChat for your growing tool belt.

## Just want the example code?
You may see the source code [here](https://github.com/mihailgaberov/desktop-chat-nw). There is also a detailed [README](https://github.com/mihailgaberov/desktop-chat-nw/blob/master/README.md), where you will find all the information you need to install, run and test the app.

Because the desktop app is built using web technologies, it is entirely possible to run it in your browser. Towards the end of this post, I will show you how to deploy the app on Netlify.

## Planning
In this section we have to decide what components will we need to build. What functionality will they have? In other words, what are the questions we need to answer, to plan the building process?

Let’s step back for a while and think. Try asking yourself the questions who will take us to the structure we need for our app.

_Below I am going to lay out my questions and the answers. This is the process of the actual building the structure of the app, but in your head first. Keep in mind that it happens very often such that when answering a question new questions appear. This was the case with me as well._

__Questions:__

- What am I doing? 😆
- What kind of app am I going to be building?
- What are the most common components, such an app needs to have?
- How do the app’s components interact with each other?
- What level of completion am I aiming for — (demo apps are not supposed to be fully featured)?


__Answers__ (following the order of the questions):

- This is the most neglected question that many people forget to think about. _When one can step aside first and give a clear answer to this question, his path for future developments becomes settled_. In my specific case the answer I got sounds something like this — “I am thinking about building a chat app. This app should serve as a tutorial demo app. It will have to provide basic functionality for ‘having a chat’ by using CometChat API. It should run on a desktop”. The styling and specific details about what goes where will come later in the process.
- A chat app that will run on desktop and serve as a demo for this tutorial.
- To give a proper answer to this question, a non-familiar person would have to do some research first. Take a look at real-world chat applications. Make notes of what features they have. How are they put them in place, how do they interact between them and with the users of the app. In my case, I had some [previous experience](https://mihail-gaberov.eu/how-i-build-chat-app-with-react-and-typescript-part1/) and got, more or less, the idea of what I need.
- The interaction between the components would be pretty straight forward. The user should be able to use the main component that is a text input and a button to send messages. And a sidebar component to see the other chat participants.
- The demo app should provide basic chat functionality — send and receive real-time messages. And be able to run on a desktop (without a browser).

## Features
I have decided to implement the following features to the demo app:

- Send with Enter key
- A sidebar with names and last active time
- Welcome screen with input and validation with error messages
- Chat area with auto-scroll to bottom
- Chat message and time of sending.

## Front End — React
We are going to use [React](https://reactjs.org/) to build our user interface. Below, I am going to list the components I have created and a short explanation about each of them:

- [ChatPane](https://github.com/mihailgaberov/desktop-chat-nw/tree/master/src/components/ChatPane) — this is the main container-like component that contains the Participants and Conversation components and passes the data they need to visualize.
- [Conversation](https://github.com/mihailgaberov/desktop-chat-nw/blob/master/src/components/Conversation/Conversation.jsx) — this is the component responsible for typing and sending chat messages.
- [Footer](https://github.com/mihailgaberov/desktop-chat-nw/blob/master/src/components/Footer/Footer.jsx) — displays a simple footer message, containing the app name and version, as defined in package.json file.
- [Header](https://github.com/mihailgaberov/desktop-chat-nw/blob/master/src/components/Header/Header.jsx) — header component holding the application menu bar.
- [MenuAppBar](https://github.com/mihailgaberov/desktop-chat-nw/blob/master/src/components/MenuAppBar/MenuAppBar.jsx) — application menu bar component, simulating how a real menu bar would look like. The hamburger menu on the left and the profile dropdown menu on the right are fake — clickable, but not functional.
- [Messages](https://github.com/mihailgaberov/desktop-chat-nw/blob/master/src/components/Messages/Messages.jsx) — a container component, holding a message itself — it has the name of the sender, the message content and the time of sending.
- [Participants](https://github.com/mihailgaberov/desktop-chat-nw/tree/master/src/components/Participants) — this component shows the name of a chat member and the time when he joined.
- [Welcome](https://github.com/mihailgaberov/desktop-chat-nw/tree/master/src/components/Welcome) — this component is responsible for displaying the login page — the starting point of our app, where we have logic related to checking for certain allowed usernames and storing them to the local storage for later use. I also implemented basic error handling logic, which shows an error when the selected username is not correct, as per CometChat API (in this specific case for our demo) registered usernames — superhero1, superhero2 and so on till 5.


Here a visual representation of the app components:

![Visual Components](./chat-app-components.png)

## State Management — Redux
Every modern application these days has a state. Place in the memory where the application is storing certain data for later use. For our application state management, we use [Redux](https://redux.js.org/). Of course, for a simple app like this, we could go without using Redux at all. But, from the learning point of view (_after all we all do this for learning new stuff, right?_), I think it would be nice to see the whole cycle of sending a request to an API, going through a middleware (redux-thunks) and getting the response recorded to the state. And we will manage this state by using Redux.

### How it works
The main building blocks in a Redux app are called reducers — small functions used for managing the state. Simply said, what they do is accepting the old state object as input and, depending on certain actions (which are also passed in the same input), returning new state object. The new state could be changed in full or just partially.

In our app, we have three simple reducers, which are responsible for those parts of the state, responsible for the users’ list, the login process and sending/receiving messages. All of them can be seen in [/src/reducers](https://github.com/mihailgaberov/desktop-chat-nw/tree/master/src/reducers) folder, along with a [file](https://github.com/mihailgaberov/desktop-chat-nw/blob/master/src/reducers/initialState.js) containing the initial state of our app.

Redux, as state management library, can be used with any other UI framework, practically every app that needs to have a state can benefit from using Redux. If you want to go deeper, start from their website and follow along.

🔥 Thanks for reading! 🔥
