var assert = require('assert');
var config = require('../../config');
var mongoose = require('mongoose');
var Browser = require('zombie');

//global variables for the test case
var Admins, admin, browser, newEmployee, editedEmployee, domain;
domain = 'http://'+config.app.domain+':'+config.app.port;

describe("Testing site",function(){
	before(function(){
		admin = new Admins({
			name: "Admin",
			lastname: "Administrator",
			emailAdress: "admin@admin.com",
			password: "123456"
		});

		browser = new Browser({debug: false});
	});
	it("Should enter the public main page of the site",function(done){
		browser.visit(domain,function(done){
			if(browser.assert.text('title','Employee Wiki'))
				done();
		});
	});

});