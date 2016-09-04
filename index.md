---
layout: default
image: https://github.com/vinkla.png
color: 82a6ee
---

<header>
  <h1><a href="{{ site.github.owner_url }}" title="View Vincent's GitHub profile page">Vincent Klaiber</a></h1>
</header>

<article>
  <p>Find me on <a href="{{ site.github.owner_url }}" title="Vincent on GitHub">GitHub</a> and <a href="https://twitter.com/vnkla" title="Vincent on Twitter">Twitter</a>.</p>

  <ul>
    {% for post in site.posts %}
      <li>
        <a href="{{ post.url }}">{{ post.title }}</a>
      </li>
    {% endfor %}
  </ul>
</article>
