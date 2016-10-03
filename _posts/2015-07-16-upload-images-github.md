---
layout: post
title: Upload Images to GitHub's CDN
image: https://cloud.githubusercontent.com/assets/499192/8718466/e58c679c-2ba4-11e5-8e3c-3f9955b810f7.jpg
---

I often see developers committing screenshots to their GitHub repositories. This takes up unnecessary space and makes the repositories messy. There is a better solution, using GitHub CDN.

Instead of committing the image resource to the repository we'll take advantage of GitHub's CDN that is accessible through GitHub issues.

First, visit any repository on GitHub and click your way through to the issues page.

Create a new issue by clicking the button **New Issue**. You'll now see both a title and a description field. Drag-and-drop an image on to the description field. This will start the uploading process.

In our example below we're uploading an image of Marty McFly.

```text
![Uploading marty-mcfly.jpg...]()
```

Once GitHub is done uploading the image they will automagically add the URL to the description field. Great Scott!

```text
![marty-mcfly](https://cloud.githubusercontent.com/assets/499192/8718466/e58c679c-2ba4-11e5-8e3c-3f9955b810f7.jpg)
```

Now you can copy the URL and use it in README files, issues or pull requests how ever you like. This is heavy.

If you put your mind to it, you can accomplish anything.
