# Open Exception Tracker

## About Open Exception Tracker

Open Exception Tracker is a way for you to host your own exception tracker.

## Installation

### Server
You can install the application via git clone:

```bash
git clone git@github.com:byronfichardt/Watcher.git
```

Once installed, you can run the following commands to install the dependencies:

```bash
composer install
composer post-root-package-install
composer post-create-project-cmd
```
Next you need to create a database and add the credentials to the .env file.

```bash
DB_CONNECTION=mysql
DB_HOST=
DB_PORT=
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=
```

Then you can run the following commands to create the tables and seed the database:

```bash
php artisan migrate
```

Once you have the application up and running, you will need to create a user and a service.
The application is scaffolded with Laravel Breeze. 
So you can register a user by going to {app_url}/register.
Once registered you will be logged in and see the Dashboard

![Dashboard](https://github.com/byronfichardt/free-exception-tracker/blob/main/public/img/img.png)

You will then need to go to {app_url}/services and create a service.
This will generate a token that you will need to add to your application .env, (This will only show once!)
It will also generate a service ID that will identify which service you will be sending the exceptions to.
(see details below)

### Client
https://github.com/byronfichardt/laravel-free-exception-tracker  
Then you will need to install the client package on the laravel project you want to track exceptions.

```bash
composer require byronfichardt/free-exception-tracker-client
```

Then you need to add the following to your .env file:

```bash
FREE_ET4_TOKEN=
FREE_ET4_BASE_URL=
FREE_ET4_SERVICE_ID=
```

## Contributing

Thank you for considering contributing to the Open Exception Tracker! 
Please keep the Pr's small and descriptive.

## License

Open Exception Tracker is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
