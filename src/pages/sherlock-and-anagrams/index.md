---
title: "Sherlock and Anagrams"
date: "2019-03-15"
---
Solve "Sherlock and Anagrams" coding challenge in JavaScript

![Solve "Sherlock and Anagrams" coding challenge in JavaScript](./sherlock-and-anagrams.jpg)
###### Photo by [Javier Quesada](https://medium.com/r/?url=https%3A%2F%2Funsplash.com%2Fphotos%2FqYfwGVNJqSA%3Futm_source%3Dunsplash%26utm_medium%3Dreferral%26utm_content%3DcreditCopyText) on [Unsplash](https://medium.com/r/?url=https%3A%2F%2Funsplash.com%2Fsearch%2Fphotos%2Ftask-anagrams%3Futm_source%3Dunsplash%26utm_medium%3Dreferral%26utm_content%3DcreditCopyText)


---
This post is going to get you through my solution of a coding challenge called "Sherlock and Anagrams". You may take a look at it in [HackerRank](https://www.hackerrank.com/challenges/sherlock-and-anagrams/). I spent half a day (or maybe more) trying to solve it, with JavaScript. When I tried to google it, I could not find a decent JS solution. I found just one and it was not working correctly. Also any explanations were completely out of the question. That's why I decided to write an article about it and try to put some nice and easy to digest explanations along the way. Keep reading now!

⚠ CAUTION: _I will roll out my solution below with short explanations about each of the steps. If you want to give a try yourself, please stop here and go to HackerRank site_.

## Problem
Two strings are anagrams of each other if the letters of one string can be rearranged to form the other string. Given a string, find the number of pairs of substrings of the string that are anagrams of each other.

For example s = mom, the list of all anagrammatic pairs is [m, m], [mo, om] at positions [[0], [2]], [[0, 1], [1, 2]] respectively.

#### Constraints
Length of the input string: 2 ≤ |s| ≤ 100

String s contains only lowercase letters from the range ascii[a-z].

---

## Analysis
First thing first - we need to get a better understanding of the whole problem. What is an anagram? What is an anagrammatic pair? Can I see one? Also, what exactly does it mean substrings?

>_In other words, we need to have a clear picture of what are we trying to solve, before solving it._

_I think here is a good moment to mention that the challenge in question is under "Dictionaries and Hashmaps" section in HackerRank website, so it's very likely for one to think, that probably he has to use this kind of data structures when solving it._ 😇

🔥 Thanks for reading! 🔥
