---
layout: post
title: Find Outdated Packages With Composer
image: https://cloud.githubusercontent.com/assets/499192/18227834/4314cc5e-7232-11e6-90f3-ff683569f432.jpeg
---

[Composer](https://getcomposer.org/) now features an “outdated” command to find newer versions of your dependencies. The command shows a list of installed packages including their latest version.

[![{{ page.title }}](https://cloud.githubusercontent.com/assets/499192/18227834/4314cc5e-7232-11e6-90f3-ff683569f432.jpeg)](https://cloud.githubusercontent.com/assets/499192/18227834/4314cc5e-7232-11e6-90f3-ff683569f432.jpeg)

To list outdated packages in your project, use the `outdated` command.

```bash
$ composer outdated
```

If you’re working with a big framework like Laravel or Symfony the list could become quite long. To make it more readable, the outdated command comes with two flags.

1. Implies -latest, but this lists *\*only\** packages that have a newer version available.

   ```bash
   $ composer outdated --outdated
   ```

2. Restricts the list of packages to your direct dependencies.

   ```bash
   $ composer outdated --direct
   ```

Read more about the command in the [original pull request](https://github.com/composer/composer/pull/5028) or in the [documentation](https://getcomposer.org/doc/03-cli.md#outdated). This feature was requested by many and I’m really happy to see this feature integrated within Composer.
