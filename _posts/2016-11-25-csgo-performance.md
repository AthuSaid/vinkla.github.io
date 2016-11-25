---
layout: post
title: CS:GO Performance Boost
image: https://cloud.githubusercontent.com/assets/499192/20625785/a4225b78-b315-11e6-9ce2-cf16ebb426e4.png
---

Earlier this year I stopped playing Counter-Strike: Global Offensive. The [frame rate](https://en.m.wikipedia.org/wiki/Frame_rate) was to slow on my Macbook Pro. It was no fun. Today I found a solution on how to boost the performance. In this article I'll describe how I managed to get my frame rate up to 200.

First, let me show you my current macOS setup. I'm using a Macbook Pro from 2015 with [macOS Sierra](https://www.apple.com/macos/sierra). I'm running the Intel Iris Pro 1536 MB graphics card and 16 GB of memory.

[![macOS about box](https://cloud.githubusercontent.com/assets/499192/20625733/7c5e4020-b315-11e6-8fb8-b4f126d5795c.png)](https://cloud.githubusercontent.com/assets/499192/20625733/7c5e4020-b315-11e6-8fb8-b4f126d5795c.png)

After some research I found the launch options below. These options will boost the performance while you play the game. 

```
-high -tickrate 128 -novid -threads (Cores) -nod3d9ex - nojoy - refresh (Hz) +cl_forcepreload 1 -console -lv
```

> Launch options are commands, that let you tell the game to perform an action when launching it or that let you force a specific setting. For example, you can specify a window height and a width you want the game to start with. Every new launch option starts with a dash, but you can also put console commands in the launch options. These need a plus in front of them (e.g. +exec randomconfigfile) - [Steam](https://steamcommunity.com/sharedfiles/filedetails/?id=379782151)


You can find the launch options if you right-click on the game in the Steam sidebar. Then click on *Properties*. Now, click on the big button which is called *Set Launch Options*. Copy and paste the options from the snippet above.

[![CS:GO launch options](https://cloud.githubusercontent.com/assets/499192/20626159/2bc9e67a-b318-11e6-9c65-b2c448137356.png)](https://cloud.githubusercontent.com/assets/499192/20626159/2bc9e67a-b318-11e6-9c65-b2c448137356.png)

Now start CS:GO and open up the video settings options page. I've set my resolution to 1280x800. I've also chosen to set low quality on almost everything to get the best frame rate possible. Try playing around with these options to see what fits your setup.

[![CS:GO video settings](https://cloud.githubusercontent.com/assets/499192/20625746/91bb0e3a-b315-11e6-805b-23251be07f9b.png)](https://cloud.githubusercontent.com/assets/499192/20625746/91bb0e3a-b315-11e6-805b-23251be07f9b.png)

As you can see in the image below, in the lower right corner. I managed to up my frame rate to around 200. It jumps between 100 and 200 but it doesn't effect the gameplay.

[![CS:GO fps demo gameplay](https://cloud.githubusercontent.com/assets/499192/20625785/a4225b78-b315-11e6-9ce2-cf16ebb426e4.png)](https://cloud.githubusercontent.com/assets/499192/20625785/a4225b78-b315-11e6-9ce2-cf16ebb426e4.png)

If you know of any additional setting which would boost the performance on macOS even more. [Please let me know on Twitter!](https://twitter.com/vnkla)
