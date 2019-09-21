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



🔥 Thanks for reading! 🔥
