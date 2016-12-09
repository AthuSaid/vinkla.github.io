---
layout: post
title: Testing GitHub Pages
image: https://cloud.githubusercontent.com/assets/499192/21054118/95b6b418-be2c-11e6-9587-20b650fcd00f.jpg
---

This site is built with [GitHub Pages](https://pages.github.com). Did you know you can test your GitHub Pages with [Travis](https://travis-ci.org)? In this article I'll describe how to test if your Jekyll site with Travis.

First of, if you're running you GitHub page with Jekyll you should have a `Gemfile` which looks similar to the snippet below.

```ruby
source 'https://rubygems.org'

gem 'github-pages', group: :jekyll_plugins
```

Create a new file in the [root directory](https://en.m.wikipedia.org/wiki/Root_directory) of your project and name it `.travis.yml`. Copy and paste the content from the snippet below.

```yaml
language: ruby
rvm:
  - 2.2
  
sudo: false

script: bundle exec jekyll build
```

Visit your [profile page on Travis](https://travis-ci.org/profile) and enable your GitHub repository for testing. That's about it! You should now be able to [add a badge](https://shields.io) to your you `README.md` file.

If you want to take it further, you can read more about continuous integration on [Jekyll's documentation](https://jekyllrb.com/docs/continuous-integration) page.
