![cf](http://i.imgur.com/7v5ASc8.png) 08: Vanilla REST API
=====================================

## Daily Plan
* Notes:
  - Anything top of mind?

* Code Review - http server
* Promises

* Lab Preview & Code Demo (Lets build a legit RESTful API)

```sh
01-vanilla-rest-api
├── __test__
│   ├── lib
│   │   ├── parse-json.test.js
│   │   ├── parse-url.test.js
│   │   ├── router.test.js
│   │   └── storage.test.js
│   ├── model
│   │   └── toy.test.js
│   ├── route
│   │   └── route-toy.test.js
│   └── server.test.js
├── lib
│   ├── parse-json.js
│   ├── parse-url.js
│   ├── router.js
│   └── storage.js
├── model
│   └── toy.js
├── package-lock.json
├── package.json
├── route
│   └── route-toy.js
└── server.js
```

----

## Readings
* Watch [Promises](https://www.youtube.com/watch?v=2d7s3spWAzo)

## Learning Objectives
* Students will learn to use promises to manage async code
* Students will learn to create a RESTful api with in memory persistence

# Overview
## Promises
  * **Overview**
    * promises are used to solve the problem of nested callbacks (aka: "callback hell")
    * they provide us with a way to make asynchronous code easier to read and follow
    * a promise represents a value which can be available now, in the future, or never
    * basic usage: `new Promise(function(resolve, reject) { ... });`
    * one of the biggest benefits of promises is through the use of the `then()` and `catch()` methods
      * these methods are used to handle returned promises and can be chained as they are on the `Promise` prototype

  * **States**
    * **pending** - initial state - not fulfilled or rejected
    * **fulfilled** - the operation completed successfully
    * **rejected** - the operation failed

  * **Methods**
    * `Promise.all()` - returns a promise that fulfills when all of the promises in an provided array have fulfilled *or* returns a promise that rejects when one of the items in the array rejects
    * `Promise.reject()` - returns a `Promise` object that is rejected
    * `Promise.resolve()` - returns a `Promise` object that is resolved with a given value
    * `catch()` - returns a `Promise` that deals with rejected cases only
    * `then()` - returns a `Promise` that deals with fulfilled cases
    * **demo:** working with promises

## Vanilla REST API
  * **Overview**
    * we'll be creating a vanilla REST API, with a custom router, that uses custom built and native NodeJS modules (with the exception of `uuid`)
      * the router we will be creating will mimic the core functionality of the router supplied by `express.js`
    * in addition to the creation of our API, we'll be adding tests that check our API calls for the expected response data
      * this will be done through the use of `superagent` and Jest (`expect`)
      * **remember:** include the server in your test file so that your server is running during the testing process
    * **demo:** Vanilla REST API

  * **Helper Commands**
    * start the server: `node server.js`
    * quit the server (mac osx): `ctrl c`
    * get a note *(be sure to use your port number and note id)*:
      * `http GET localhost:8000/api/note?id=123456789` *or* `http GET :8000/api/note?id=123456789`
    * post a note *(be sure to use your port number)*:
      * `http POST localhost:8000/api/note name="name of the note" content="some content for the note"`
    * for more useful commands when using `httpie`, check out the docs: [httpie docs](https://httpie.org/doc)
