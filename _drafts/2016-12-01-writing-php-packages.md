---
layout: post
title: PHP Packages The Right Way
image: https://i.giphy.com/F6CoHaGTogRTW.gif
---

I've written and released about 30 PHP packages on [GitHub](https://github.com). This doesn't make me an expert by any means but I've picked up a couple of things along the way. In this article I'll share my tips and tricks for writing and maintaining open-sourced packages.

Think of it as this. You're sharing code other developers can find useful. You want to make your code as accessible and reliable as possible. When developers look at your code, they should be as satisfied as [Antonio Banderas](https://www.themoviedb.org/person/3131-antonio-banderas).

[![Antonio Banderas](https://i.giphy.com/F6CoHaGTogRTW.gif)](https://www.themoviedb.org/person/3131-antonio-banderas)

If you're [code smells](https://en.m.wikipedia.org/wiki/Code_smell) and is hard to understand, developers wont find it useful. 

## The PHP League

https://thephpleague.com/

### PSR-4

[PSR-0](http://www.php-fig.org/psr/psr-0) is dead. It has been deprecated since 2014. Don't use it. Instead, use the [PSR-4](http://www.php-fig.org/psr/psr-4) autoloader and shove your code in a `src` folder.

### PSR-2

Adhere to [PSR-2](http://www.php-fig.org/psr/psr-2) as the coding style guide. Use tools such as [PHP Coding Standards Fixer](https://github.com/FriendsOfPHP/PHP-CS-Fixer) and [StyleCI](https://styleci.io). These tools will make your syntax life happier.

### Packagist

List your package on Packagist. If you're creating a package that isn't installable with [Composer](https://getcomposer.org), is it really to necessary to open-source it at all?

### Tests

Write [unit tests](https://github.com/sebastianbergmann/phpunit). Aim for at least 80% [coverage](https://codecov.io) in the first version.

Distribute the [PHPUnit](https://github.com/sebastianbergmann/phpunit) file as `phpunit.xml.dist`. Add `phpunix.xml` to the `.gitignore` file to allow developers to keep a custom `phpunit.xml` locally without having to think about commiting it to the repository.

Use [Travis-CI](https://travis-ci.org) to automatically check coding standards and run tests.

### DocBlocs

[DocBlock](https://www.phpdoc.org/docs/latest/references/phpdoc/index.html) all the things.

### Semantic Versioning

Use [Semantic Versioning](http://semver.org) to manage version numbers.

### Changelog

Keep a [changelog](http://keepachangelog.com/en).

### Documentation

Have an extensive `README.md`. The documentation should cover the installation process and usage guide with code examples.

### .gitattributes

[Exclude non-essential files](https://www.reddit.com/r/PHP/comments/2jzp6k/i_dont_need_your_tests_in_my_production/) in `.gitattributes`. We 

## Laravel

### Romantic Versioning

Don't allow all future versions of Laravel with ~5.0 or ^5.0, instead use 5.1.*, 5.2.*, etc.

### Config File

If you're writing a Laravel specific package, don't prefix the config file with `laravel`. We already know it is 


## Conclusion

There are no [right way](http://www.phptherightway.com) of doing things. This list is just my point of view.

Thanks to [James Brooks](https://github.com/jbrooksuk), the creator of [Cachet](https://cachethq.io), for sharing his ideas.
