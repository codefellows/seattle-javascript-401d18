![cf](http://i.imgur.com/7v5ASc8.png) 24: Component Composition
===

## Daily Plan
* Notes
  - Anything top of mind
  - Copying the lecture code and then refactoring... Please do not.

* Code Review _build the expense tracker one... more... time..._
* Component Composition _Deeper view of modularizing components; Composition vs. Inheritance..._
* Data Structure: Trees _Depth First Traversal & Insertion_

* Lab preview _Notes List App Part 2_
* Whiteboard Challenge __

----

## Learning Objectives
* students will be able to utilize proper component composition constructs
* students will be able to compose react components through the use of props

## Resources
* read [conditional rendering](https://facebook.github.io/react/docs/conditional-rendering.html)
* read [lists and keys](https://facebook.github.io/react/docs/lists-and-keys.html)
* read [composition vs inheritance](https://facebook.github.io/react/docs/composition-vs-inheritance.html)
* skim [thinking in react](https://facebook.github.io/react/docs/thinking-in-react.html)

## Overview
#### Component Composition
###### Composition  
* some components do not know their children ahead of time
* react components can use the special `children` prop to pass children directly into their output
  * for example, a `SpeechBubble` component could be passed a `SuccessMessage` or `ErrorMessage` component to be used as a child component

###### Specialization
* composition can be used to create special cases of another component
  * for example, a `Modal` component could be composed to create a `SignupModal` or a `LoginModal` component
