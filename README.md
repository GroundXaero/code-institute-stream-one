# Code Institute Stream One Project

## Overview
### What is this app for?
This is the final front-end project for Code Institute, it is a website for a fictional carpentry company that does work ranging from projects in the house, the garden, or other site work.
 
### What does it do?
This app will allow users to get an introduction to the company and browse through their previous projects to get a feel for the quality of their work.

The user can then check the availability of the company for hiring by reading the "upcoming scheduled work" listings or by entering a specific date, this will also provide details for an estimated cost of the work.

The user may also contact the company more directly about any other inquiries on the contact page via a form.
 
### How does it work
 This app uses AngularJS for routing, templating, and javascript functionality related to forms and date checking. The site is styled with Bootstrap.


## Features
### Existing Features
- Home page
 
### Features Left to Implement
- Project gallery
- Booking availability checker
- Contact form


## Tech Used
### Some the tech used includes:
- [AngularJS](https://angularjs.org/)
    - We use **AngularJS** to handle page routing, templating, and various functionality.
- [Bootstrap](http://getbootstrap.com/)
    - We use **Bootstrap** to give our project a simple, responsive layout.
- [FontAwesome](https://fontawesome.com)
    - We use **FontAwesome** to provide the project with a selection of icons to use throughout the design.
- [Google Fonts](https://fonts.google.com)
    - We use **Google Fonts** to give our project easy access to more varied font choices that don't need to be installed on the user's device.
- [npm](https://www.npmjs.com/)
    - We use **npm** to help manage some of the dependencies in our application.


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