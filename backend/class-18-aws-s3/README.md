![cf](http://i.imgur.com/7v5ASc8.png) 18: AWS S3
=====================================

## Daily Plan
* Notes: 
  - Anything top of mind?
  - We're going to go over time today...maybe 'til 12:45p.

* Code Review
* Data Structures Code Demo _Stacks: push() and Queues: enqueue()_
* Amazon AWS (S3) Intro _general talk about aws-sdk_
* Continuous Integration Intro _TravisCI / YML file format_
* Code Demo _hook up a new resource using S3 as file storage_

* After lunch:  30 minute time-boxed whiteboarding in pairs
  - stack/queue whiteboard challenge
    * Groups:
      1. Michelle / Isaiah
      2. Isaac / Shaun
      3. Katherine / Gavin
      4. Tim / Maddy / Said
      5. Aaron / Zach

-----

## AWS S3
  * **Overview**
    * S3 *(Amazon Simple Storage Service)* is a scalable object storage platform
    * S3 will be used as a way to store images used within our application
    * using the `aws-sdk` module, each time a new file is saved we will be provided with a url to the associated file
      * this url is what we will be saving to the database in our application, not the actual file
    * when uploading files to S3, we consider each file to be an "object"
    * "objects" can then be contained in buckets for later use

## Helpers
  * **`.env` config**
  ``` javascript
    PORT='8000'
    MONGODB_URI='mongodb://localhost/yourdbname'
    APP_SECRET='yourdbsecret'
    AWS_BUCKET='yourbucketname'
    AWS_ACCESS_KEY_ID='youraccesskey'
    AWS_SECRET_ACCESS_KEY='yoursecretkey'
  ```
  * _Don't forget to replicate these key:value pairs with data for your test environment in `.test.env`_

  * **newly added `npm` modules**
    * `multer` - used for handling multipart form data (`entype="multipart/form-data"`)
    * `del` - deletes files and folders
    * `aws-sdk` - official sdk (software development kit) with helper tools for working with AWS


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
        - 'stable'
      services:
        - mongodb
      addons:
        apt:
          sources:
            - ubuntu-toolchain-r-test
          packages:
            - gcc-5
            - g++-5
      env:
        - CXX=g++-5
      sudo: required
      # safelist
      branches:
        only:
        - master
        - test_branch
      before_script: npm i
      script:
        - npm run test
    ```
