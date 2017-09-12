![cf](http://i.imgur.com/7v5ASc8.png) 17: Bearer Auth
=====================================

## Daily Plan
* Notes
  - Anything top of mind?
  - Postman

* Code review - Update our TDD scaffold (fixed the Jest 'hang' bug)
* Bearer Auth - Finish up the Auth process we started 

* Lab Preview & Demo

* Continuous Integration with TravisCI (introduction)

----

## Bearer Auth
  * **Overview**
    * using standard HTTP, we can use *bearer* auth tokens to access protected resources
    * this token is accessible on the `req.headers.authorization` property and can be split by the term **`Bearer `** to grab the associated token (much like we did with `Basic ` auth yesterday)
    * in our application, this token will used to provide a user with permissions to access specific routes of our choice (ex: `POST: /api/gallery` and `GET: /api/gallery/:id`)

  * **JWT (JSON Web Tokens)**
    * a **JWT** is the standard for securely transmitting information between parties as a JSON object
    * this information is secured through a digital signature
    * we'll be "signing" our **JWT's** through the use of an `APP_SECRET` that we will configure as part of our environment variables

    * **Benefits:**
      * **authentication** - once a user has logged in, each new request will include the JWT - allowing the user to access routes that are permitted with that token
      * **general information exchange** - JWT's are excellent at securely transmitting data between parties - this is often configured using a series of public/private key pairs

## CFGram Visualization
  ![visualization](https://s3-us-west-2.amazonaws.com/s.cdpn.io/154088/cfgram.png)

---- 

## Continuous Integration (CI)
  * **Overview**
    * CI is the concept of merging new code into a collaborative repository multiple times a day
    * CI tools provide us with a basic level of build automation and software quality management (SQM) - this is done by:
      * running our build processes
      * checking to ensure our build is working
      * checking to ensure that all of our tests have passed

  * **TravisCI**
    * [TravisCI](www.travisci.org) is an easy to use, highly configurable CI tool
    * to enable a new repository to work with TravisCI, you simply need to:
      * create an account with TravisCI
      * enable the repository(s) you wish to use
      * create a `.travis.yml` file, which is used to configure a build **(see example file below)**
      * each time a new PR is made, TravisCI will run and provide the build status to ensure all checks have passed *(using the built in TravisCI widget on GitHub)*

  * **Example: `.travis.yml`**
    ```yml
      language: node_js
      node_js:
        - "8"
      services:
        - mongodb
      addons:
        apt:
          sources:
            - ubuntu-toolchain-r-test
          packages:
            - gcc-4.8
            - g++-4.8
      env:
        - CXX=g++-4.8
      sudo: required
      before_script: npm i
      script:
        - npm run test
    ```
