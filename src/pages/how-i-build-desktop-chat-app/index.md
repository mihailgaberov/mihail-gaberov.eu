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


🔥 Thanks for reading! 🔥
