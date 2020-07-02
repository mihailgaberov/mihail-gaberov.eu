---
title: "How to create an air blowing effect with JavaScript"
date: "2020-07-02"
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
- [Matter.Engine](https://brm.io/matter-js/docs/classes/Engine.html) - this is the controller that manages updating the simulation of the world.
- [Matter.World](https://brm.io/matter-js/docs/classes/World.html) - contains methods for creating and manipulating the world composite.
- [Matter.Render](https://brm.io/matter-js/docs/classes/Render.html) - module is a simple HTML5 canvas based renderer for visualizing instances of Matter.Engine.

In our example we use further: 
- [Matter.Bodies](https://brm.io/matter-js/docs/classes/Bodies.html) for creating the different parts on the scene (the balls, the circle invisible bounds).
- [Matter.Body](https://brm.io/matter-js/docs/classes/Bodies.html) for applying forces to the bodies and thus create nice physics simulation of a blower.
- [Matter.Runner](https://brm.io/matter-js/docs/classes/Runner.html) to run the whole thing.
- [Matter.Events](https://brm.io/matter-js/docs/classes/Events.html) that gives us ability to have listeners for different events that could happen during the animation. In this specific case we use it for listening the 'tick' event, which is occurring on every render tick. In the event handler function we do our checking for when the balls are colliding with the walls, and we apply the relevant forces to create a bounce effect. We postpone the listening for this event with a 3 seconds timeout, so we can have more lotto-like effect. Imagine a sphere where the balls are starting to move when let's say you press a button.

## Try and Play
In the beginning of this article, I have posted the link to the [GitHub repository](https://github.com/mihailgaberov/bingo-blower) with the code and the assets in it. If you want to play more, you can easily check it out and try different modifications. You might want to play with the forces you apply, or the size of the balls, etc. _There is plenty of room for experimenting when we talk about Physics_. And it's always fun, especially when we add animations to the picture. Take a peek i

## Conclusion
As it turns out, [Matter.js](https://brm.io/matter-js/index.html) is a great library for doing 2d realistic animations backed up by the laws of Physics. Of course, there are other options one might choose from, but as we said, this is a matter of choice and project needs. I personally would recommend at least giving a try and see for yourself. For someone with Flash experience or similar, Matter.js is definitely easy to start with. And if you are stubborn enough to keep trying different settings, you might achieve incredible results.

🔥 Thanks for reading! 🔥

## Resources
- https://brm.io/matter-js/ - The website of the library
- https://burakkanber.com/blog/modeling-physics-in-javascript-introduction/ - interesting and well explained articles related to physics in JavaScript
- https://spicyyoghurt.com/tutorials/html5-javascript-game-development/collision-detection-physics/ - collisions detection tutorial
- https://codepen.io/AlexRA96/full/egaxVV - bouncing ball example
- https://codepen.io/Shokeen/pen/WjKmMG?editors=1010 - codepen example with applying forces
- https://code.tutsplus.com/tutorials/getting-started-with-matterjs-body-module--cms-28835 - beginner tutorial to get you started with Matter.js
- https://codepen.io/jh3y/pen/gOPmMyO?editors=0110 - another cool example with falling bears
- https://codepen.io/danielgivens/pen/geKrRx - even cooler example with a circle clock and particles inside
- https://codepen.io/dotcli/pen/NEXrQe - another example of circle bounds and particles (socks!) inside
