Employee Wiki
-------------
The Employee Wiki it's a project from a curse taken in the months of may and june in the Polo Tecnológico Rosario. The lessons were in charge of [Cristian Cortez](https://github.com/cortezcristian).

####Main Included Technologies
#####Backend
- [Nodejs](https://nodejs.org/)
- [MongoDB](https://www.mongodb.org/)
- [Mongoose](http://mongoosejs.com/)
- [Express](http://expressjs.com/es/)
- [Jade](http://jade-lang.com/)
- [Stylus](https://learnboost.github.io/stylus/)
- [Passport](http://passportjs.org/)

####Frontend
- [Bootstrap](http://getbootstrap.com/)
- [jQuery](https://jquery.com/)
- [jQuery validator plugin](http://jqueryvalidation.org/)

####Develop
- [NPM](https://www.npmjs.com/)
- [Grunt](http://gruntjs.com/)
- [Bower](http://bower.io/)
- [Mocha](http://mochajs.org/)
- [Yeoman](http://yeoman.io/)

##Installation guide

1. First you need to install grunt, bower, mocha and yeoman:
```bash
$ npm install -g grunt-cli bower mocha yo
```
Note: maybe you have to run the command with sudo.

2. Then you should clone the project repository. Just execute in your terminal:
```bash
$ git clone https://github.com/Jacodom/finalCursoNodejs
``` 

3. Then you have to install all the modules the application requires, both in the backend and in the frontend.
```bash
$ cd finalCursoNodejs
$ npm install && bower install
```

That's all! You're ready to start using the application.

##Usage
To start the server and the aplication, you have to execute the following command in your terminal prompt:

```bash
$ npm start
```

It'll be listening for requests at the port 3200. If all worked out, you should see the following page:

//add the screenshot of the homepage

###Searching employees - *Public side*
You can search employees that are stored in the database. To accomplish this, you should go to the search box in the home page and start typing the keyword you're interested in. For example, if you type: *"ty"* , the application will go to the database and load all the employees which name or last name contains the keyword. It'll present the basic information of each employee in a very fancy way.

//add search screenshot

###Log in as Administrator - *Public side*
If you have administrator credentials (**hint**: *email: admin@admin.com, password: 123456*), you will be able to enter to the private side of the application, the one that lets you administrate the employees. To make this happen, you should click in the option **_Administrator_** in the navbar at the top of the page. The application will load the login page, where you can insert the correct credentials and get into the interesting part.

//add /admin and /panel screenshot 

When you access successfully, you'll be redirected to the panel page.

###Listing all the employees - *Private side*
Once you're in the panel page, you can see all the employees that are registered in the database. To accomplish this, you should click in the option **_Employees_** in the navbar at the top of the page. The application will load another page and list all the employees in a table. It will also give you the possibility to edit and delete each employee.

//add /employees screenshot

###Deleting an employee - *Private side*
All you have to do is click in the *[delete]()* option on the column at the right of the table.

###Editing an employee - *Private side*
First you should click on the option *[edit]()* option on the column at the right of the table and the application will load the editing page. It allows you to edit only the **Name**, the **Lastname** and the **Email** of the employee. Once you're done, click in the *Save* button. 

//add edit screenshot

###Adding a new employee - *Private side*
To add a new employee at the database, you have to click in the option **_New Employee_** in the navbar at the top of the page. The application will load the new employee page and you'll be able to complete each field and *Save* the new empployee. Once you saved it, you'll  be redirected to the employees list page.

//add new employee screenshot

##Testing
If you want to make a unit test of the models that compose the logic of the application, you have to run the following command on your terminal:

```bash
$ npm test
```

The application will run all the mocha tests.

##Credits
[@jacodom](https://twitter.com/jacodom)