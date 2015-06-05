var Employees = require('../../../models/employees.js');
var mongoose = require('mongoose');
var employee = new Employees({
	name: 'employeeTest', 
	lastname: "employeeLastnameTest", 
	emailAdress: "employee@employee.com", 
	password: "asd123"});

describe('Model test Employees',function(){
	describe('\n\t#Add an employee',function(){
		it('Should save an employee whitout errors',function(done){
			console.log("\tEmployee data:\n\t\tName: "+employee.name+"\n\t\tLastname: "+employee.lastname+"\n\t\tEmail Adress: "+employee.emailAdress+"\n\t\tPassword: "+employee.password);
			employee.save(done);
			console.log("\tEmployee saved with _id: "+employee._id);
		});
	});

		describe('\n\t#Checking security - bad credentials',function(){
		before(function(){
			var employee = new Employees({
						name: "Jon",
						lastname: "Tester",
						emailAdress: "employee@employee.com",
						password: "asd123"
				});
			console.log("\n\tOriginal data:\n\t\tName: "+employee.name+"\n\t\tLastname: "+employee.lastname+"\n\t\tEmail Adress: "+employee.emailAdress+"\n\t\tPassword: "+employee.password);
		});
		it('The authentication method should fail with the wrong password',function(done){
			var psw = "qwerty123";
			console.log("\n\n\tWrong password: "+psw);
			var resp = employee.authenticate(psw);
			if(!resp){
				console.log("\tResponse from method: "+resp);
				done();
			}
		});
		it('The authentication method should fail with the wrong email adress',function(done){
			var email = "employee@gmail.com";
			console.log("\n\n\tWrong email adress: "+email);
			var resp = employee.authenticate(employee.password);
			if(!resp){
				console.log("\tResponse from method: "+resp);
				done();
			}
		});
	});

	describe('\n\t#Checking security - good credentials',function(){
		before(function(){
			var employee = new Employees({
					name: "employee",
					lastname: "employeeistrator",
					emailAdress: "employee@employee.com",
					password: "asd123"
			});
			console.log("\n\tOriginal data:\n\t\tName: "+employee.name+"\n\t\tLastname: "+employee.lastname+"\n\t\tEmail Adress: "+employee.emailAdress+"\n\t\tPassword: "+employee.password);
		});
		it('The authentication method should success with the original email adress and password',function(done){
			var email = "employee@employee.com";
			var psw = "asd123";
			console.log("\n\n\tCredentials to test:\n\t\tEmail Adress: "+email+"\n\t\tPassword: "+psw);
			var resp = employee.authenticate(psw);
			if(resp){
				console.log("\tResponse from method: "+resp);
				done();
			}
		});
	});

	describe('\n\t#Edit an employee',function(){
		it('Should edit an employee whitout errors',function(done){
			console.log("\n\temployee _id: "+employee._id);
			console.log("\n\tPrevious name of the employee: "+employee.name);
			employee.name = "employeeTestEdited";
			console.log("\tNew name for the employee: "+employee.name);
			employee.save(done);
		});
	});

	describe('\n\t#Delete an employee',function(){
		it('Should delete an employee whitout errors',function(done){
			console.log("\n\temployee to delete: _id:"+employee._id);
			employee.remove(done);
		});
	});
});
