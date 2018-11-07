# Hello World

[![Build status](https://travis-ci.org/joao-martins/hello-world.svg?branch=master)](https://travis-ci.org/joao-martins/hello-world)

This is a simple Hello World app that uses **express** as web framework and **handlebars** as template engine. I added a couple of *devDependencies* for testing (**mocha**) and **nodemon** for watching for changes and restarting the app automatically.


## Install and run

Just clone it, install dependencies and run it.
```
$ git clone https://github.com/joao-martins/hello-world
$ npm install
$ PORT=4000 npm start
```

## Explore

Not much to explore, to be honest :) Just head to [http://localhost:4000]() and find a friendly greeting.

You can have your own personalized greeting by adding a couple of URL parameters:

 - [http://localhost:4000/?city=Lisbon]()
 - [http://localhost:4000/?name=John]()
 - [http://localhost:4000/?name=John&city=Lisbon]()


## Test

Run the tests with `$ npm test`. This will test a few scenarios for the **buildMessage** method on the **greeter** service on the services folder.


## File structure
```
/hello-world
    ├── routes
    ├── services
    ├── views
    |   └── layouts 
    └── test
```
Everything is pretty much self-explanatory.

## Build process

I have set up a continuous integration tool ([Travis CI](https://travis-ci.org)) watching the code changes on the [repository on GitHub](https://github.com/joao-martins/hello-world). ([Heroku](https://heroku.com)) is deploying the app for each successful build.

There's a demo running on https://joao-martins-hello-world.herokuapp.com/, have fun!
