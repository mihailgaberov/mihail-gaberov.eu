---
title: "How to create an air blowing effect with JavaScript"
date: "2020-01-22"
canonical: "https://mihail-gaberov.eu/how-to-crate-an-air-blowing-effect-with-javscript"
---

>_Have you ever wondered how can you create a realistic ball blowing effect with JavaScript? Like the one shown in the evening TV shows, where multiple balls are being mixed in a sphere-like object by leveraging air pressure. If you have answered with 'yes', please keep reading below._

![Balls blower](./head-image.png)
---

✨ If you want to skip the reading and jump straight to the code, you will find it [here](https://github.com/mihailgaberov/bingo-blower). Also, I have deployed a [live demo here](https://tender-hoover-fdc559.netlify.app).✨

## Research
Recently I have decided to refurbish something old, that I did 4 years ago for a [project of mine](https://github.com/mihailgaberov/bingo/). Here is how it looked like:

![Bingo blower](./bingo-blower.png)

At that time I chose to use a library called [Paperjs](http://paperjs.org/). Back then this library gave me the closest to what I wanted to achieve. As it turned out, there are much more choices today, when we talk about JavaScript libraries for doing animations with or without physics. Before coming up with my last choice, which you will see below, I have been playing with [Anime.js](https://animejs.com/), [Velocity.js](http://velocityjs.org/), [Popmotion](https://popmotion.io/pure/), [Three.js](https://threejs.org/), [GreenSock JS](https://greensock.com/gsap/), [Mo.js](https://mojs.github.io/) and [Matter.js](https://brm.io/matter-js/). All of them have pluses and minuses, and as with everything else in the life, the choice between them depends on the specific needs one might have. _I choice Matter.js_.

## Meet Matter.js
Matter.js is a 2D rigid body JavaScript physics engine. Sounds complex, but it's not. What this is actually saying is, that this library contains all the stuff we need to create realistic 2D physic animations with JavaScript. For detailed information on what Matter.js has to offer, you might check their [documentation](https://brm.io/matter-js/docs/). In our case, we will take advantage mainly from the [Body module](https://brm.io/matter-js/docs/classes/Body.html), and the features it has. Let's see how in the next section.

## Balls and Tube
The "tube" component is easy. It's just a background [image](https://github.com/mihailgaberov/bingo-blower/blob/master/static/images/blower.png) I am using to create an illusion that the balls are flying inside a sphere-like glass object. The interesting part is the code to create the animations and detect the collisions between the balls and the walls. But let's go step by step.
 
We said the "tube" is a background image I am adding via simple CSS [background property](https://developer.mozilla.org/en-US/docs/Web/CSS/background). Let's see the balls themselves. For them I had two choices - try to draw circles in canvas and make them look like balls or use simple images. I choice the later option as I wanted to have more realistic view of the balls. So, with the help of a graphic processing program, a friend of mine created for me [75 images](https://github.com/mihailgaberov/bingo-blower/tree/master/static/images), one for each ball. 

Having all the assets we need, we are now ready to go deeper and implement some physics with Matter.js.

## Implement, test, implement, test
Before going to the animation itself, we need to mention few Matter.js specific things. When creating animations with this library, one needs to define as minimum:
