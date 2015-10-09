# Simple Node API Seed Project
This is meant to be a starter project to help you create a simple Node API. The design was originally based off of an older version of the [MEAN](http://meanjs.org/) stack with the goal of making it a bit simpler to pickup, understand, and begin deving.

## Features
The main feature of this project is its quick time to development for a generic RESTful backend. Vagrant creates a standard environment where all prerequesites are downloaded automatically. It also setsup a shared folder within the virtual machine which shares the project folder. Any changes made locally on the host are detected by filewatchers and the server is automatically restarted using PM2. This reduces setup time tremendously.

The second main feature of this project is its simple design. It is meant to be a very basic starting point by setting up much of the standard server work for you. This includes creating a base architecture, system for setting project variables, tests, database connections, etc. All you have to do get started is define a model in Mongoose, set routes, and then write your controller logic. So simple!

## Getting Started

### Vagrant (recommended)
Prerequiresites: requires [Vagrant](https://www.vagrantup.com/) and [VirtualBox](https://www.virtualbox.org/wiki/Download_Old_Builds_4_3) `v4.3` to be installed.

1. Clone the repository and enter the project directory

2. start the virtual machine

  ```
  $ vagrant up
  ```

3. SSH into the virtual machine 

  ```
  $ vagrant ssh
  ```

At this point the virtual machine will be up with the server and file watchers running and can be visited locally at 192.168.33.10

### Local
Prerequiresites: requires [Node.js](https://nodejs.org)

1. Clone the repository and enter the project directory

2. Install dependencies

  ```
  $ npm install
  ```
  
3. Start the server

  ```
  $ node server.js
  ```

Now the server will be hosted locally on port 3000.

## Stack
- [Node.js](https://nodejs.org) - Javascript runtime
- [Express.js](http://expressjs.com/) - web framework
- [Mongo](https://www.mongodb.org/) - database

## Additional Tools
- [Vagrant](https://www.vagrantup.com/) - standard development environment
- [PM2](http://pm2.keymetrics.io/) - server management (file watching, auto restart, etc)
- [Grunt](http://gruntjs.com/) - commandline task manager
- [Mongoose](http://mongoosejs.com/index.html) - object resource management for MongoDB
