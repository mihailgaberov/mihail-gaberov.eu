---
title: "React Hooks: Revisited"
date: "2019-03-22"
---

![React Hooks: Revisited](./react-hooks-revisited.jpg)
###### Photo by [Etienne Girardet](https://unsplash.com/photos/Xh6BpT-1tXo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/hooks?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
---

## Intro
Some time ago, before ↪️React Hooks ↩️were officially released, I have written [another article](https://mihail-gaberov.eu/react-hooks-a-new-way-of-working-with-react-state/) about them. It was an attempt to learn and explain this new feature. Now, when they are officially part of the last React releases, I have decided to revisit them and try to present better examples of their usage.

## Why
Right after my first presentation, I've received some very useful comments by a colleague of mine. Comments regarding the presentation and the examples, and advice of how I can do better. I kept these comments in my email for some time. And today I will try to follow them, so we can get better understanding about this feature, which now can be used in any new or existing project.
___

## Show Time
 Since we have covered the theory behind the hooks last time (and there are a lot of nice explanations on the subject out there now), I don't plan to repeat it here. What I plan is to start directly with examples, but to strive to keep them as clear and focused as possible. 🐽
 
 ## Example 1:
 In this example we will take a closer look at the two of __the most important built-in hooks - useState and useEffect__.
 
 ### 📌 State Hook - useState()
 📚 Theory - this is just to remind us what is this hook meant to be used for and then we will see how to use it below. What [React documentation](https://reactjs.org/docs/hooks-state.html) say is: "_one of the Hooks provided by React is called useState. We're also sometimes going to refer to it as the "State Hook". It lets us add local state to React function components_". This means that whenever we need to manipulate our component state, we can go for _useState_ hook.
 
 👉 Practice - you can see [live example here and play with it](https://codesandbox.io/s/9y96vvwwq4).
 
 ### 📌 Effect Hook - useEffect()
 📚 Theory - this is just to remind us what is this hook meant to be used for and then we will see how to use it below. What React documentation say is: "_The Effect Hook lets you perform side effects in function components. Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects_". This means that whenever we need to perform some side effect or use a result returned from such, we should go for _useEffect_ hook.
 
 Here is an example in which we will see what are the differences when we use this hook with __one parameter and with two parameters__. We also will see what happens if we provide a return value for the first param.
 
 👉 Practice - you can see [live example here and play with it](https://codesandbox.io/s/9y96vvwwq4).
 
 _If you want to go really deeper into this, here Dan Abramov posted [A Complete Guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/). It's a really long article, but it's worth it._

## Example 2
In this example we will take a closer look at the __custom hooks__ and how can we use one.

📌 Custom Hook (e.g. usePictures)

📚 Theory → as we remember from the [last time](https://mihail-gaberov.eu/react-hooks-a-new-way-of-working-with-react-state/), custom hooks are exactly what the name implies. Hooks that we can create by our own and we can use built-in hooks in them. _Or simply said - our own functions that can benefit from React built-in hooks_. In the example below, we will see how to create such and use it in combination with previously mentioned hooks. For instance, how can we fetch a 3rd party REST API and do something with the result. 💻

👉 Practice - you can see [live example here](https://hooks-revisited.herokuapp.com/) and the code for it [here](https://github.com/mihailgaberov/react-hooks/blob/hooks-revisited/src/App.js).
___
## Conclusion
   In the end of this brief retrospection, we could refresh our memories by mentioning some of the key things we need to keep in mind, when using React Hooks.
   
   __Hooks don't remove classes - we still can use classes if we want or need them.__
   
   __Hooks rules - we must follow them when using hooks:__
   ☙ __Only Call Hooks at the Top Level_ -  this basically means that we must not call hooks (yes, remember, hooks are functions and we can call them) inside loops, conditions and nested functions. And we must follow the order in which Hooks are called. Note that you don't need to worry about this problem if you use the provided lint rule.
     ☙ __Only Call Hooks from React Functions__ - this means we are not suppose to call Hooks from regular JavaScript functions. Instead, we should be calling them only from React function components or custom Hooks.
   
   _I hope this article helps you feel more confident when using React Hooks_. 😏

🔥 Thanks for reading! 🔥
