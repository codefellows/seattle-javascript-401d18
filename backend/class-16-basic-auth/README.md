![cf](http://i.imgur.com/7v5ASc8.png) 16: Basic Auth
=====================================

## Daily Plan
* Notes 
  - Anything top of mind? 

* Brief review - where we've been; where we're going...

* Review Friday's testing content
* Stacks and Queues - Introduction & common functionality
* Authentication

* Lab Preview & Code demo (we're starting fresh this week!)
  - We'll write some tests to get us started!

----

## Readings
* Read [Basic Authentication](https://en.wikipedia.org/wiki/Basic_access_authentication)

----

## Stacks & Queues
  #### Stack
  * Stacks are a first in last out data structure (FILO)
  * Stacks may have an optional `maxSize` property, which, when exceeded, instantiates a new Stack for overflow OR an overflow state  
  * To add a value to the top of the stack a `push` method is used
  * To retrieve and remove a value from the top of a stack a `pop` method is used
  * Some stacks have a `peek` method that gets the value on top of the stack without removing it
  * Stacks cannot access any values beneath the top value
  * Each Node (also called Item or Value or Element) will have a property for a Value and one for a pointer to the previous Node
  * Stacks are used for ...
  * Implementing history with undo
  * Memory management
  * Call stack management
  * Implementation variants:
  * Linked List (common)
  * Arrays (utilize the built-ins from Array.prototype...)

  #### Queue
  * Queues are a first in first out data structure (FIFO)
  * to add a value to the end of the queue a `enqueue` method is used
  * to retrieve and remove a value from the beginning of the queue a `dequeue` method is used
  * A Queue will keep track of the `head` and `tail` Nodes but does not need to explicitly track Nodes within the collection
  * A Queue does not have a specific capacity
  * Exception: a 'Bounded Queue', which is limited to a fixed number of Nodes
  * Queues are used for ...
  * Event listeners
  * Request Responders
  * Ensuring code runs in a specific order
  * Implementation variants:
  * Doubly Linked List (common)
  * Linked List
  * Dequeue (Double ended queue)

----- 

## Authorization & Authentication
  * **Authorization**
    * **authorization** refers to *user permissions*
      * we'll be using authorization to verify access to use our application

  * **Authentication**
    * **authentication** refers to *who you are*
      * think of authentication as a user *login* and *password*

  * **Basic Authentication Scheme**
    * basic access authentication is used when a user provides a username and password over HTTP
    * basic auth provides **no real significant protection** as the credentials are sent through the HTTP headers when making a request
    * the `req.headers.authorization` header property provides us with a standard base64 encoded string that is prepended with `Basic `
    * upon splitting off the end of the `Basic ` base64 string, we can transform this into a UTF-8 string and grab the username and password as they are now available and split with a `:`
      * ex: `username:password`

  * **demo:** basic auth demo & start of `CFgram` application build out
