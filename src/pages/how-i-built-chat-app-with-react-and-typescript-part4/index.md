---
title: "How I built a chat app with React, TypeScript and Socket.io (part 4)"
date: "2019-02-25"
---

![How I build a chat app with React, TypeScript and Socket.io (part 4)](../how-i-build-chat-app-with-react-and-typescript-part1/how-i-build-a-chat-app-head.jpeg)
###### Photo by [Steve Halama](https://unsplash.com/photos/Yhc7YGZlz3g?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/coding-chat-application?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)


## TL;DR
This is the second part of a thorough step-by-step guide for building a single page chat application using React, TypeScript and Socket.io. If you want to take a look at the other chapters, here you go:
 - [Part I](https://mihail-gaberov.eu/how-i-build-chat-app-with-react-and-typescript-part1/)
 - [Part II](https://mihail-gaberov.eu/how-i-build-chat-app-with-react-and-typescript-part2/)
 - [Part III](https://mihail-gaberov.eu/how-i-build-chat-app-with-react-and-typescript-part3/)

If you want to skip the reading, [here](https://github.com/mihailgaberov/chat) 💁 is the GitHub repository with a detailed [README](https://github.com/mihailgaberov/chat/blob/master/README.md) 🙌, and [here](https://mihails-chat.herokuapp.com/#/chat) you can check the live demo. 🎀 In order to play with it, you need to open it in two different browsers (or browser tabs) or devices (you may use your computer and your smartphone) and chat with each other.🎀

---
## Implementation
If you reached this point of the tutorial, you should have a very clear idea of what are we going to build. Here, we are about to find out how are we going to do it.


### Starting small
As with any other project we should strive to start with small, incremental chunks and build on them. In our case I have decided to start first with building the header navigation. The reason for that was that I wanted to have the router and the navigation controls in place, so I could easily navigate through the tabs while developing and testing.

### Settings page
After I had finished with the header and navigation parts, I decided to jump to the settings page first. Again, my reasoning was very simple -  I wanted to build first what I was going to use in the chat page. In other words I wanted to be able to customize my chat area, messages, ways of sending and etc, before implementing them.

So I started building component by component as I described them in the [previous](https://mihail-gaberov.eu/how-i-build-chat-app-with-react-and-typescript-part3/) chapter. Once I had the full settings page finished, I was able to go and start implementing the chat page components. But before that, I had to take care of the supporting stuff - integrating with [local storage](https://github.com/mihailgaberov/chat/blob/master/src/utilities/localStorageService.ts) and adding [translations mechanism](https://github.com/mihailgaberov/chat/blob/master/src/utilities/TranslationsProvider.tsx).

### Chat page
After I have done all from above, the implementation of the chat page and its components was fairly easy. I had to take care of the visual part manly and make the integration with the Redux store. As you [saw already](https://github.com/mihailgaberov/chat/blob/master/src/components/pages/Chat/ChatPage.tsx), I had to implement only two components which are shown and used on the Chat page - ChatArea and MessageSender.

### Adding improvements
I want to say a few words here regarding the app improvements we did or will do in future. Usually when we have a new requirement (__let's call it "requirement", that makes is sound closer to what would be in a real project_), is again a very good idea to do some initial research, instead of jumping directly into implementation. You will be surprised how many solutions are already out there, waiting for us to use them.

>_In other words, we don't have to invent the wheel again._

This is what I did when started thinking about adding support for emoticons or link parsing. It turned out that there are already solutions I could use with a little tweaking from my side, just to make them fit well in my project. 

Here are the links to the packages I used:

 - https://www.npmjs.com/package/linkifyjs
 - https://docs.microlink.io/sdk/getting-started/react/
 - https://www.npmjs.com/package/react-emojione
 - https://www.npmjs.com/package/get-urls

And [here](https://github.com/mihailgaberov/chat/blob/master/src/components/Message/Message.tsx) you can see how I used them in our chat app.

---

## Deploying to Heroku
I have written [another article](https://mihail-gaberov.eu/creating-twitter-bot/) in the past. It was about totally different subject, but there is a part exactly related to how to deploy an app to Heroku. You might find it useful to check it out.

For deploying our chat application to [Heroku](https://www.heroku.com/), I will assume you have already an account and can easily follow the steps below:

1. ```npm build``` to build the project to build folder.
2. Add ```build``` folder to Git to make sure it will be committed.
3. Make sure that express server loads static resources from it.
4. Commit all: ```git commit -m 'Deploy to Heroky'```.
5. Run ```git push heroku master```.
5. Open the app from the given URL (in my case: [mihails-chat.herokuapp.com](https://mihails-chat.herokuapp.com/#/chat)).

### Future (possible) plans
At the time of writing these series I was thinking it might be very interesting to try building the same application with the other super famous UI library on the market - [Angular](https://angular.io/). I still think it will be worth, but I am not sure whether I will have the time and the power to do it 😐. 

In any case, I am thinking about it as a pure, technical comparison of two major UI libraries from the developer's point of view.

Another possible extension would be to add video chat functionality using WebRCT or similar technology.

>_If I do it, I will make sure you know it!_

🔥 Thanks for reading! 🔥
