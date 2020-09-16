---
title: "How to Build a SPA with Vue.js and C# Using .NET Core"
date: "2020-09-16"
---


![Pizza App Dashboard](./dashboard.png)

##### Let's say you are a front-end developer. Or you have just had to work more with the front end recently.

Now and then you have used some back end technologies, but you've always stayed in your comfort zone, perhaps in the JavaScript world. Or maybe you have built a small API with Python.

But you have never touched the modern .NET family tech stack.

This tutorial will guide you, step-by-step, in building a modern single page application (SPA) that will take advantage of [Vue.js](https://vuejs.org/) for the front-end and [.NET Core (C#)](https://docs.microsoft.com/en-us/dotnet/core/get-started?tabs=windows) for the back-end.

We will also see how to write some tests, both unit and integration, to cover the front and and back end functionality (at least partially).

If you want to skip the reading, [here](https://github.com/mihailgaberov/pizza-app) 💁 is the GitHub repository with a detailed [README](https://github.com/mihailgaberov/pizza-app/blob/master/README.md) 🙌.

### What Will We Build
🧑‍💻 We will build a web app where users can signup/login and just tell us how much they love pizzas, by pressing an "I love it" button.

There are no restrictions on the number of times each user can show us their appreciation. The only requirement is that only logged in users can vote.

On the home page, along with the signup/login buttons, we will put a little bar-chart, displaying the top X users with the highest appreciation (on the X-axis) and the number of votes on the Y-axis.

### Installation
Let's start with the front end. It makes more sense to build the visible parts of our app first. We will build our front end with one of the most famous front-end libraries on the market: Vue.js.

#### How to Set Up the Front End
In order to install and configure our initial front end setup with Vue.js, we will use the [Vue CLI](https://cli.vuejs.org/). This is a standard command-line tool for developing Vue.js applications.

To install it, use the following command. Note that all commands in this tutorial use [NPM](https://www.npmjs.com/), which you need to have installed on your machine in order to follow along.

```bash
npm i -g @vue/cli
```

After successfully installing the Vue CLI, we should be able to start using it to install and configure Vue.js itself. Let's do with the following process.

Step 1: Create a new empty project directory and open it with the following commands:

```bash
mkdir pizza-app
cd pizza-app
```

Step 2: While in the project root, run the following:

```bash
vue create frontend
```

Then from the provided options, select the following:

 - Manual select features

![Manual select features](./install-vue1.png)

 - Babel
 - Router
 - CSS-Preprocessors (SASS)

![Bable, Router, CSS-Preprocessors](./install-vue2.png)

Then select version 2.x from the next screen:

![select version 2.x](./install-vue3.png)

Next, select 'Use history mode for router?' and 'Sass/SCSS (with node-sass)', like so:

![Use history mode for router?' and 'Sass/SCSS (with node-sass)](./install-vue4.png)

 - Linter / Formatter
 
![Linter / Formatter](./install-vue5.png)

