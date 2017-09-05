![cf](http://i.imgur.com/7v5ASc8.png) 12: Express Middleware
=====================================

## Daily Plan
* Notes:
  - Anything top of mind?
  - What's happening this week? Where are we at overall... 
  - 1:1s happening this week

* Code Review

* Express Review / Intro
* Express Middle ware Review / Intro
  - Error handling & Cors
  - req, res, next...

* Lab Preview & Demo / Refactor to Express


## Reading 
* Skim [morgan docs](https://github.com/expressjs/morgan)
* Skim [cors docs](https://github.com/expressjs/cors)
* Skim [dotenv docs](https://github.com/motdotla/dotenv)
* skim [express api docs](http://expressjs.com/en/4x/api.html)
* read [express routing](http://expressjs.com/en/guide/routing.html)

## Learning Objectives
* students will be able to create a single resource API using the express framework
* students will be able to leverage 3rd party helper modules for debugging, logging, and handling errors

#### Express
  * **Overview**
    * **express.js** is a web application framework that provides us with a series of tools that are used to simplify the development process
    * it is excellent at handling much of the heavy lifting that a modern REST API requires
    * it also provides us with useful helpers to manage requests, routes, and even views
    * in addition to managing requests and routes, it provides us with the ability to create our own middeware components
      * middleware provides us with access to the `req` and `res` objects
      * middleware also provides us with the ability to access the `next` middleware function in the `req` and `res` cycle

  * **Route Methods**
    * **express.js** provides us with simple to use route methods and parameters
    * example route methods and useage:
    ```javascript
      const express = require('express');
      const app = express();

      // get notes from the /api/note endpoint
      app.get('/api/note', function(req, res, next) { ... });

      // get a specific note from the /api/note/:id endpoint
      app.get('/api/note/:id', function(req, res, next) { ... });

      // post a new note to the /api/note endpoint
      app.post('/api/note', function(req, res, next) { ... });
    ```

## Middleware
  * **Overview**
    * middleware functions are functions that have access to the `req` and `res` objects
    * middleware can also access the next middleware function in the middleware chain by calling `next()`

  * **Types of Middleware**
    * **application level:** binds middleware to an instance of the `app` object through the use of:
      * `app.use()`
      * `app.METHOD()` *get, post, put, delete*
    * **router level:** binds middleware to an instance of `express.Router`
    * **error handling:** handles error status codes, messages, etc in a single location
      * error middleware must be used below other `app.use` calls
      * it contains 4 arguments `(err, req, res, next)`
    * **built-in:** helper methods provided by `express`
      * ex: `express.static()`
    * **3rd party:** is used by passing 3rd party middleware into an `app.use` call
      * ex: `app.use(bodyParser.json())`
      * ex: `app.use(cors())`

## Express `Router`
  * **Overview**
    * `express.Router` is used to create modular route handlers
      * this is done through an instance of `express.Router`
    * today, we'll use an instance of the `express.Router` to create a custom `note-router` with **GET** and **POST** route functionality

