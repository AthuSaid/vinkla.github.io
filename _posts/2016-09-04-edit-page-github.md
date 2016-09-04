---
layout: post
title: Edit This Page on GitHub
image: https://octodex.github.com/images/jetpacktocat.png
---

If you're running an open source project with [GitHub](https://github.com/) and use [GitHub Pages](https://pages.github.com/) for your projects site or documentation there is a neat trick you might not know of.

You can make easily add a link to the current file on GitHub with Jekyll.

**&#123;&#123; site.github.repository_url &#125;&#125;/blob/master/&#123;&#123; page.path &#125;&#125;**

Which will in this case output:

**{{ site.github.repository_url }}/blob/master/{{ page.path }}**

[This demo link will take you to the correct markdown file on GitHub.]({{ site.github.repository_url }}/blob/master/{{ page.path }})

You can also try clicking the [GitHub corner](http://tholman.com/github-corners/) badge in the upper right corner.
