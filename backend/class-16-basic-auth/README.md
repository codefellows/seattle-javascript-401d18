![cf](http://i.imgur.com/7v5ASc8.png) 16: Basic Auth
=====================================

## Readings
* Read [Basic Authentication](https://en.wikipedia.org/wiki/Basic_access_authentication)


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
