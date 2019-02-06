---
title: "Creating a Twitter bot at 5am"
date: "2018-05-06"
---

![Creating a twitter bot](./creating-twitter-bot-head-img.jpeg)

Photo by freestocks.org on Unsplash

Nowadays the use of social networks is considered a normal thing, something that is part of our daily life. Maybe most of the people even don’t think about it. They just use them automatically. Just like that.

But some of these people may also ask the question which made me write this article — what do we get from these networks for giving them our personal data, our interests and preferences? What can we use them for?

Well, creating a Twitter bot is not new nor hot topic (not even hard to do), but it’s one of those things I am alluding about. Twitter is a social network that generates and uses enormous data flows from people to people. And the so called bots in this network are actually small programs written in a certain programming language.

_One of the most valuable thing we can get from the social networks is the data. And we can do that in an automated way. Here is where these pieces of software, the bots, can help us._

If you google the topic, you will see that one of the most common examples for a Twitter bot is the one that retweets or likes certain tweets, searched by certain criteria. That criteria can be defined by the creator of the bot. The more I was reading on the topic, the more I was thinking about what can I do with such bot. Also I had to make sure that this is not going to spam and annoy other people. Again, the simplest answer is the right one. __I have decided to create a bot that will send me private messages with information about tweets related to topics I am interested in.__ Very shortly after I did the first version (started around 5 in the morning, hence the title of the article :)) I thought myself that I have to do it a bit more useful for the other people as well.

This is how I ended up creating a Twitter bot with Node.js that sends direct messages to his followers with information about tweets relevant to certain search criteria.

Enough talking for now, let’s begin the fun part.
