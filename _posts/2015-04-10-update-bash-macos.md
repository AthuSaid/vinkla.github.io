---
layout: post
title: Update Bash on macOS
image: https://cloud.githubusercontent.com/assets/499192/19453581/2cc66c7c-94b6-11e6-9128-9c6d4eabf172.png
---

macOS doesn't ship with the latest version Bash. The new version of Bash has some nice new features that are worth the effort of updating.

[![{{ page.title }}](https://cloud.githubusercontent.com/assets/499192/19453581/2cc66c7c-94b6-11e6-9128-9c6d4eabf172.png)](https://cloud.githubusercontent.com/assets/499192/19453581/2cc66c7c-94b6-11e6-9128-9c6d4eabf172.png)

## Version

First of you can check the current version. Open up the Terminal application and run the following.

```bash
bash --version
```

This should show you which version of bash you're using and some other copyright information. If you haven't updated Bash in the past, it should say you're running version `>=3.0` or higher.

## Updating

If you haven't yet installed the [Homebrew](http://brew.sh/) you can find more information about the installation process [on their website](http://brew.sh/).

Once you've got Homebrew up and running, you should now start by updating `brew` to the latest version.

```bash
brew update; brew upgrade; brew cleanup; brew doctor;
```

If your system is ready to brew, you can now install Bash.

```bash
brew install bash
```

Now when you check which version you're running, it should show you `>=4.0` or higher. Though, we aren't done yet. Try running the command below.

```bash
echo $BASH_VERSION
```

This gives you another version, probably the previous older version. This is because the system doesn't yet know that you want to use the newer version.

First of, you'll need to add the new shell to the list of allowed shells.

```bash
sudo bash -c 'echo /usr/local/bin/bash >> /etc/shells'
```

Then you'll also need to change to the new shell.

```bash
chsh -s /usr/local/bin/bash
```

That's it! Now close terminal and boot the machine. You're now running the latest version of Bash.
