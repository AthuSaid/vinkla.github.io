---
layout: post
title: Setup Wildcard DNS on macOS
color: f4d03f
image: https://cloud.githubusercontent.com/assets/499192/18232020/9a040b52-72c7-11e6-8728-94d2b65316d2.png
redirect_from:
  - /2014/11/setup-wildcards-dns-on-mac-os-x/
  - /posts/setup-wildcards-dns-on-mac-os-x/
---

Setting up wildcard DNS records in your local development environment doesn't come out of the box with macOS. But don't you worry! With [Dnsmasq](http://www.thekelleys.org.uk/dnsmasq/doc.html) and [Homebrew](http://brew.sh) you can have it up and running within minutes.

## Getting Started

Dnsmasq is available within [Homebrew](http://brew.sh). First make sure you have the latest version of `brew` and then install Dnsmasq.

```sh
brew update
brew install dnsmasq
```

The next step is to set up your `dnsmasq.conf`. To configure Dnsmasq, copy the example configuration to `/usr/local/etc/dnsmasq.conf` and edit to taste.

```sh
cp /usr/local/opt/dnsmasq/dnsmasq.conf.example /usr/local/etc/dnsmasq.conf
```

Now let's edit `/usr/local/etc/dnsmasq.conf` to include our custom DNS routing rules. Add your rules just below the `double-click.net` example line.

```sh
address=/whatsapp.dev/192.168.10.10
```

I'm using [Laravel Homestead](http://laravel.com/docs/homestead) in example above. The IP should be connected to your local development environment and the address should be the same as specified in your `/etc/hosts` file.

Copy the LaunchDaemons to have Dnsmasq launched on system startup.

```sh
sudo cp -fv /usr/local/opt/dnsmasq/*.plist /Library/LaunchDaemons
```

Then to load Dnsmasq now.
```sh
sudo launchctl load /Library/LaunchDaemons/homebrew.mxcl.dnsmasq.plist
```

The next step is to make sure outbound requests check Dnsmasq before any remote DNS servers. Open up System Preferences and visit the network pane. Click on the Advanced button and then select the DNS tab.

![{{ page.title }}](https://cloud.githubusercontent.com/assets/499192/18232020/9a040b52-72c7-11e6-8728-94d2b65316d2.png)

Add the following three IP addresses to make sure the requests goes through Dnsmasq before any thing else. The latter two are Google's DNS servers. They should work in most cases. If you ever run into any problems, these addresses can easily be changed.

```sh
127.0.0.1
8.8.8.8
8.8.4.4
```

Thats about it. Easy huh! Now you should be able to visit your domain with any subdomain.

Please note that when you edit the `dnsmasq.conf` configuration file you'll have to kill the process and reload it. Use the command below.

```sh
sudo kill $(ps aux | grep '[d]nsmasq' | awk '{print $2}')
```

If something went south, please [visit the official documentation](http://www.thekelleys.org.uk/dnsmasq/doc.html).
