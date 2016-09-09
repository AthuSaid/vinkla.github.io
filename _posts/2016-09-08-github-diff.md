---
layout: post
title: GitHub Diff Syntax Highlighting
image: https://cloud.githubusercontent.com/assets/499192/18377943/3fa5683a-766a-11e6-978c-e2a6c3f8515a.png
---

Did you know [GitHub](https://github.com/) support diff syntax highlighting? I didn't until just recently. When [creating and highlighting code blocks](https://help.github.com/articles/creating-and-highlighting-code-blocks/) you can set the language to `diff` and highlight lines starting with `+` or `-` signs.

```diff
You gonna order something, kid?
- Ah, yeah. Give me- Give me a Tab.
Tab? I can't give you a tab unless you order something.
+ Right. Give me a Pepsi Free.
You want a Pepsi, pal, you're gonna pay for it.
```

In the code block above, we've added the `+` and `-` signs for the lines we want to highlight. You can see the full [markdown syntax](https://guides.github.com/features/mastering-markdown/) in the example below.

{% highlight markdown %}
```diff
You gonna order something, kid?
- Ah, yeah. Give me- Give me a Tab.
Tab? I can't give you a tab unless you order something.
+ Right. Give me a Pepsi Free.
You want a Pepsi, pal, you're gonna pay for it.
```
{% endhighlight %}

[Here you can find an example from an issue on GitHub.](https://github.com/npm/marky-markdown/issues/64)
