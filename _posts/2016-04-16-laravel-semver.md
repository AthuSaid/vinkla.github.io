---
layout: post
title: Laravel Doesn’t Follow Semantic Versioning
image: https://cloud.githubusercontent.com/assets/499192/18230184/eac26a7c-7293-11e6-9c36-4f95288dc4a0.jpeg
---

While browsing repositories on [GitHub](https://github.com/) I often come across [Laravel](https://laravel.com/) packages which could simple stop working with future versions of Laravel. This can easily be fixed by being more specific.


[![{{ page.title }}](https://cloud.githubusercontent.com/assets/499192/18230184/eac26a7c-7293-11e6-9c36-4f95288dc4a0.jpeg)](https://cloud.githubusercontent.com/assets/499192/18230184/eac26a7c-7293-11e6-9c36-4f95288dc4a0.jpeg)

Laravel doesn’t follow [Semantic Versioning](http://semver.org/). Instead Laravel keeps the first number as a name, the second as major release and the third can be both feature and bug-fix. Laravel follows [Romantic Versioning](http://blog.legacyteam.info/2015/12/romver-romantic-versioning/).

```
HUMAN.MAJOR.MINOR

NAME.MAJOR.MINOR/PATCH

NAME.BREAKING.FEATURE/BUGFIX
```

This is quite important and in my opinion all Laravel package developers should know about this.

Packages will most likely break if you allow all future versions of Laravel 5.

```json
"illuminate/support": "~5.0"
```

The solution is to be more specific. Let’s say we support version 5.2 and 5.3. We can add both versions to the [composer.json](https://getcomposer.org/) file.

```json
"illuminate/support": "5.2.* || 5.3.*"
```

Now we know it wont break in Laravel 5.4 since we don’t allow that version.

<blockquote class="twitter-tweet" data-conversation="none" data-lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/barryvdh">@barryvdh</a> I would use 5.0.x… not that anything major will change, but sometimes very small thing sdo</p>&mdash; Taylor Otwell (@taylorotwell) <a href="https://twitter.com/taylorotwell/status/574942568619757568">March 9, 2015</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

I suggest taking a look at [Graham Campbell’s packages](https://github.com/search?utf8=%E2%9C%93&q=user%3AGrahamCampbell+laravel&type=Repositories&ref=searchresults) and use them as a boilerplate for future and existing Laravel packages. [Graham](https://gjcampbell.co.uk/) is one of the core contributors of Laravel. He always specifies the exact versions of Laravel in his packages.
