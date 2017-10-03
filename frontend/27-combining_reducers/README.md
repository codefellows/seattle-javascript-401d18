![cf](http://i.imgur.com/7v5ASc8.png) 27: Combining Reducers & Testing Actions/Reducers
===

## Daily Plan
* Notes
  - Anything top of mind

* Code Review _Review Redux & Complete Lab Features_
* Combining Reducers _Setting dependent state modifications on models_
* Lab Preview _Expense Tracker Pt2_

* Binary Trees _Deeper look into the constraints of Binary Trees, and AVL Trees_
* Whiteboard Challenge: _Implement a Binary Search Method (ex. `contains()` or `lookup()`) on a binary tree_

----

## Learning Objectives
* students will be able to combine reducers to simplify the management of complex application states
* students will be able to create meaningful tests through the use of jest and enzyme
* students will continue to work with the fundamental principles of redux to gain a better understanding on state management

## Resources
* read [combine reducers](http://redux.js.org/docs/api/combineReducers.html)

## Overview
#### combineReducers
* reducers are great tools for defining state and state based changes to your applications
  * as your application state gets more complex, your reducers become hard to manage
  * this is where `combineReducers` comes into play
* `combineReducers` is a redux method that enables you to create a single reducer from many reducers that define sub states and their interactions
* a state returned from a combined reducer is an object where each _sub state reducer_ defines a property on that object