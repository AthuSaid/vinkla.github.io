---
layout: post
title: Generate Fake Localized Data with Laravel
image: https://github.com/vinkla.png
---

Instead of populating the database by yourself, [Laravel](https://laravel.com/) integrates the [Faker package](https://github.com/fzaninotto/Faker) which is used to generate fake English data into your database. What if you want to generate data in your own language?

When testing, it is common to need to insert a few records into your database before executing your test. In version 5.1 [Laravel](https://laravel.com/) introduced [model factories](https://laravel.com/docs/5.3/database-testing#model-factories) to easily generate fake data into your applications.

If you want to specify a custom locale, you can create a new [service provider](https://laravel.com/docs/5.3/providers) and overwrite the default locale. In my case, I want the data in Swedish. You can [find a full list of locales here](https://github.com/fzaninotto/Faker/tree/3eb289c8e0d6a18e1604d576726989e437d2e4c9/src/Faker/Provider).

```php
<?php

/*
 * This file is part of the faker article.
 *
 * (c) Vincent Klaiber <hello@vinkla.com>
 */

namespace App\Providers;

use Faker\Factory as FakerFactory;
use Faker\Generator as FakerGenerator;
use Illuminate\Support\ServiceProvider;

/**
 * This is the faker service provider class.
 *
 * @author Vincent Klaiber <hello@vinkla.com>
 */
class FakerServiceProvider extends ServiceProvider
{
    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register()
    {
        $this->registerFakerGenerator();
    }

    /**
     * Register the faker generator class.
     *
     * @return void
     */
    protected function registerFakerGenerator()
    {
        $this->app->singleton(FakerGenerator::class, function () {
            return FakerFactory::create('sv_SE');
        });
    }
}
```

Once the service provider is created. Add the service provider to the providers array in `config/app.php`.

```php
App\Providers\FakerServiceProvider::class
```

That’s it, you are now ready to generate fake data in any language you want!
