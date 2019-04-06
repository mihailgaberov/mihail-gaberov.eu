---
title: "Optimizing JavaScript Apps: Loops"
date: "2019-04-06"
---

![React Hooks: Revisited](./optimizing-javascript-apps-loops.jpg)
###### Photo by [Zachary Young](https://unsplash.com/photos/7NtiJBowheE?utm_source=unsplash&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/loops?utm_source=unsplash&utm_content=creditCopyText)
---

One of the easiest and most ignored thing to do, in order to boost up the performance of our JavaScript applications, is to learn how to write properly high performant loop statements. The idea of this article is to help with that.


>_We will see the main types of loop used in JavaScript and how can we write them in a performant way._

Let's begin!
___

## LOOP PERFORMANCE
When it comes to loop performance, the debate is always about which loop to use. Which is the fastest and most performant? The truth is, that, of the four loop types provided by JavaScript, only one of them is significantly slower than the others - ```for-in``` loop. _The choice of loop type should be based on your requirements rather than performance concerns_.

>_There are two main factors that contribute to loop performance - work done per iteration and number of iterations._

In the sections below we will see how by decreasing them, we can have a positive overall impact to the loop performance.

## For Loop
ECMA-262, 3rd Edition, the specification that defines JavaScript's basic syntax and behavior, defines four types of loops. The first is the standard ```for``` loop, which shares its syntax with other C-like languages:

```jsx
for (var i = 0; i < 10; i++){
    //loop body
}
```

This is probably the most commonly used JavaScript looping construct. In order to understand how can we optimize its work, we need to dissect it a little bit.

### Dissection
The ```for``` loop consists of four parts: initialization, pretest condition, loop body, post-execute. The way it works is the following - first the initialization code is executed (var i = 0;), then the pretest condition (i < 10;). If the pretest condition evaluates to ```true```, then the body of the loop is executed and after that the post-execute code (i++) is run.

### Optimizations
The first step in optimizing the amount of work in a loop is to minimize the number of object member and array item lookups.

You can also increase the performance of loops by reversing their order. In JavaScript, reversing a loop does result in a small performance improvement for loops, provided that you eliminate extra operations as a result.

Both of the statements above are valid for the other two faster loops as well (```while``` and ```do-while```).

```jsx
// original loop
for (var i = 0; i < items.length; i++){
    process(items[i]);
}

// minimizing property lookups
for (var i = 0, len = items.length; i < len; i++){
    process(items[i]);
}

// minimizing property lookups and reversing
for (var i = items.length; i--; ){
    process(items[i]);
}
```

## While Loop
The second type of loop is the ```while``` loop. This is simple pretest loop, consisted of pretest condition and a loop body.

```jsx
var i = 0;
while(i < 10){
    //loop body
    i++;
}
```

### Dissection
If the pretest condition evaluates to ```true```, the loop body is executed. If not - it's skipped. Every ```while``` loop can be replaced with ```for``` and vice versa.

### Optimizations

```jsx
// original loop
var j = 0;
while (j < items.length){
    process(items[j++]);
}

// minimizing property lookups
var j = 0,
    count = items.length;
while (j < count){
    process(items[j++]);
}

// minimizing property lookups and reversing
var j = items.length;
while (j--){
    process(items[j]);
}
```

## Do-While Loop

```do-while``` is the third type of loop and it's the only post-test loop in JavaScript. It is comprised of body loop and post-test condition:

```jsx
var i = 0;
do {
    //loop body
} while (i++ < 10);
```

### Dissection
In this type of loop, the loop body is executed always at least once, then the post-test condition is being evaluated, and if it's ```true```, another loop cycle is executed.

### Optimizations
```jsx
// original loop
var k = 0;
do {
    process(items[k++]);
} while (k < items.length);

// minimizing property lookups
var k = 0,
    num = items.length;
do {
    process(items[k++]);
} while (k < num);

// minimizing property lookups and reversing
var k = items.length - 1;
do {
    process(items[k]);
} while (k--);
```

## For-In Loop
The fourth and the last type of loop is called ```for-in``` loop. It has very special purpose - __enumerates the named properties of any JavaScript object__. Here it is how it looks like:

```jsx
for (var prop in object){
    //loop body
}
```

### Dissection
It's similar to the _regular_ ```for``` loop only by its name. The way it works is totally different. And this difference makes it much slower than the other three loops, which have equivalent performance characteristics such that it's not useful to try to determine which is fastest. Each time the loop is executed, the variable ```prop``` has the name of another property, which is a _string_, on the ```object```. It will execute until all properties have been returned. These would be the properties of the object itself, as well as the ones inherited through its prototype chain.

### Notes
>_You should never use "for-in" to iterate over members of an array._

Each iteration through this loop causes a property lookup either on the instance or on the prototype, which makes the ```for-in``` loop much slower than the other loops. For the same number of iterations, it could be seven time slower than the rest.

## Conclusion
👍 The for, while, and do-while loops all have similar performance characteristics, and so no one loop type is significantly faster or slower than the others.

👍 Avoid the for-in loop unless you need to iterate over a number of unknown object properties.

👍 The best ways to improve loop performance are to __decrease the amount of work done per iteration and decrease the number of loop iterations__.

I hope this was useful for you, as it was for me!

🔥 Thanks for reading! 🔥

## Resources
["High Performance JavaScript" ](https://www.amazon.com/High-Performance-JavaScript-Application-Interfaces/dp/059680279X)- Nicholas C. Zakas
