# Simple blog app

A Simple Blog App that you can create, get, edit and delete posts.
It's been made with Angular, Angular CLI, Angular material, Express, Node and Mongodb.

### Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

[Node - Click to download](https://nodejs.org/en/)

[Angular CLI](https://cli.angular.io/)

To use this app, you need to use a Mongo Db client for storing your blog's data.
We use Mongodb atlas in this repository, but you can use whatever you want.

In the backend folder there is an app.js file. In this file your mongo db client URI goes here

``` javascript
// Your mongodb uri goes here
const uri = "";
```
#### Downloading this repository
Download this repo using the ```git clone``` command:

```
> git clone https://github.com/Rphmelo/Simple-Blog.git
```

### Installing

A step by step series of examples that tell you how to get a development env running

Install the dependencies

```
npm install
```

After installing the dependencies, the given command will run the app:

```
npm start
```
You can access the app at http://localhost:4200/

```
npm run start:server
```
Will run the backend


## Built With

* [Angular](https://angular.io/)
* [Angular Material](https://material.angular.io/) 
* [Mongodb Atlas](https://www.mongodb.com/cloud/atlas)
* [Mongoose](https://www.npmjs.com/package/mongoose)
* [Nodejs](https://nodejs.org/en/)
* [Expressjs](https://expressjs.com/pt-br/)

## Authors

* **Raphael de Melo Silva** - *Initial work* - [Rphmelo](https://github.com/Rphmelo)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
