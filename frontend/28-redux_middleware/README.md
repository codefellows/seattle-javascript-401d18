![cf](http://i.imgur.com/7v5ASc8.png) 28: Review Day / Redux Middleware
===

## Daily Plan (day 28 pt 2)
* Notes
  - Anything top of mind
  - Final Projects _Pre-existing project idea pitch_
  - Project Valor Updates? _There needs to be a decision sooner rather than later on forward progression on this app_

* Code Review _Add UI components for our Cards_
  - Review reducers/action creators
  - how does UI hook up to underlying state management
* Data Validation _Client-side or Server-side?? Why?_
* Redux Middleware _What is it, and why do we want/need it?_
* Lab Preview _Add middleware logger and input validation_

* Whiteboard exercise _write a function that will compare two binary trees and determine if they are structurally identical_


## Daily Plan (day 28 pt 1)
* Notes
  - Anything top of mind

* Code Review _Add UI components for our Cards_
* Lab Preview _Get caught up_

* Whiteboard exercise _write a function to flatten a bst into a linked list (bonus sorted linked list)_

----

## Learning Objectives
* students will be able to create and implement custom middleware for redux
* students will be able to add and implement third party middleware for redux

## Resources
* [redux middleware](http://redux.js.org/docs/advanced/Middleware.html)

## Overview
* redux middleware provides a third-party extension points between dispatching an action at the moment it reaches the reducer
* it can be used for common tasks, such as:
  * logging actions
  * adding `Promise` support
  * making API requests
  * caching
  * throttling
  * etc, etc.

* Middleware syntax _verbose description_
```js
storeInstance => 
  functionToCallWithAnActionThatWillSendItToTheNextMiddleware => 
    actionThatDispatchWasCalledWith => 
      valueToUseAsTheReturnValueOfTheDispatchCall
```











