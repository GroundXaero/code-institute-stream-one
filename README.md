# Code Institute Stream One Project

## Overview
### What is this app for?
This is the final front-end project for Code Institute, it is a website for a fictional 
 
### What does it do?
 
This app will allow users to register and login. Once the users have done that, they'll be able to create items to add to their todo list. Once they've created their todo list, they'll be able to update the status of each item and even delete items!
 
### How does it work
 
This app uses JSON Web Tokens to authenticate users and keep them logged in. All the data is consumed from an API hosted on Heroku using AngularJS. The site is styled with Bootstrap.


## Features
### Existing Features
- None yet!
 
### Features Left to Implement
- User Based Features
    - Registration
    - Login
    - Logout
- Todo Based Features
    - Creating Todo Items
    - Retrieving Todo Items
    - Updating Todo Items
    - Deleting Todo Items


## Tech Used
### Some the tech used includes:
- [AngularJS](https://angularjs.org/)
    - We use **AngularJS** to handle page routing, we also use it to make calls to the REST API and build custom directives
- [Bootstrap](http://getbootstrap.com/)
    - We use **Bootstrap** to give our project a simple, responsive layout
- [FontAwesome](https://fontawesome.com)
    - We use **FontAwesome** to provide the project with a selection of icons to use throughout the design
- [npm](https://www.npmjs.com/)
    - We use **npm** to help manage some of the dependencies in our application


## Contributing
### Getting the code up and running
1. Firstly you will need to clone this repository by running the ```git clone <project's Github URL>``` command
2. After you've that you'll need to make sure that you have **npm** installed
    1. You can get **npm** by installing Node from [here](https://nodejs.org/en/)
    2. Once you've done this you'll need to run the following command: ```npm install -g bower # this may require sudo on Mac/Linux```
3. Once **npm** is installed, you'll need to install all of the dependencies in *package.json*
```
npm install
```
4. After those dependencies have been installed you'll need to make sure that you have **http-server** installed. You can install this by running the following: ```npm install -g http-server # this also may require sudo on Mac/Linux``` 
5. Once **http-server** is installed run ```http-server -c-1```
6. The project will now run on [localhost](http://127.0.0.1:8080)
7. Make changes to the code and if you think it belongs in here then just submit a pull request