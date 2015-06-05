var assert = require('assert');

var Admins = require('../../../models/admins.js');
var config = require('../../../config.js');
var mongoose = require('mongoose');
var url = config.mongoDB.url; 
var admin = new Admins({
	name: 'adminTest', 
	lastname: "adminLastnameTest", 
	emailAdress: "admin@admin.com", 
	password: "123456"});

describe('Model test Admins',function(){
	describe("#MongoDB connection.",function(){
		it('Should connect to the db whitout errors',function(done){
			mongoose.connect(url, function(err){
			if(err) throw err;
			done();
		});
		});
	});

	describe('\n\t#Add an admin',function(){
		it('Should save an admin whitout errors',function(done){
			console.log("\tAdmin data:\n\t\tName: "+admin.name+"\n\t\tLastname: "+admin.lastname+"\n\t\tEmail Adress: "+admin.emailAdress+"\n\t\tPassword: "+admin.password);
			admin.save(done);
			console.log("\tAdmin saved with _id: "+admin._id);
		});
	});

		describe('\n\t#Checking security - bad credentials',function(){
		before(function(){
			var admin = new Admins({
						name: "Admin",
						lastname: "Administrator",
						emailAdress: "admin@admin.com",
						password: "123456"
				});
			console.log("\n\tOriginal data:\n\t\tName: "+admin.name+"\n\t\tLastname: "+admin.lastname+"\n\t\tEmail Adress: "+admin.emailAdress+"\n\t\tPassword: "+admin.password);
		});
		it('The authentication method should fail with the wrong password',function(done){
			var psw = "asd123";
			console.log("\n\n\tWrong password: "+psw);
			var resp = admin.authenticate(psw);
			if(!resp){
				console.log("\tResponse from method: "+resp);
				done();
			}
		});
		it('The authentication method should fail with the wrong email adress',function(done){
			var email = "admin@gmail.com";
			console.log("\n\n\tWrong email adress: "+email);
			var resp = admin.authenticate(admin.password);
			if(!resp){
				console.log("\tResponse from method: "+resp);
				done();
			}
		});
	});

	describe('\n\t#Checking security - good credentials',function(){
		before(function(){
			var admin = new Admins({
					name: "Admin",
					lastname: "Administrator",
					emailAdress: "admin@admin.com",
					password: "123456"
			});
			console.log("\n\tOriginal data:\n\t\tName: "+admin.name+"\n\t\tLastname: "+admin.lastname+"\n\t\tEmail Adress: "+admin.emailAdress+"\n\t\tPassword: "+admin.password);
		});
		it('The authentication method should success with the original email adress and password',function(done){
			var email = "admin@admin.com";
			var psw = "123456";
			console.log("\n\n\tCredentials to test:\n\t\tEmail Adress: "+email+"\n\t\tPassword: "+psw);
			var resp = admin.authenticate(psw);
			if(resp){
				console.log("\tResponse from method: "+resp);
				done();
			}
		});
	});

	describe('\n\t#Edit an admin',function(){
		it('Should edit an admin whitout errors',function(done){
			console.log("\n\tAdmin _id: "+admin._id);
			console.log("\n\tPrevious name of the admin: "+admin.name);
			admin.name = "adminTestEdited";
			console.log("\tNew name for the admin: "+admin.name);
			admin.save(done);
		});
	});

	describe('\n\t#Delete an admin',function(){
		it('Should delete an admin whitout errors',function(done){
			console.log("\n\tAdmin to delete: _id:"+admin._id);
			admin.remove(done);
		});
	});
});
