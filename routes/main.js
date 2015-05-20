var app = module.parent.exports.app;
var Employees = require('../models/employees.js');

app.get('/panel', function(req, res){
    res.render('panel');
});

app.get('/panel/employees',function(req,res){
 	Employees.find({},function(err,docs){
 		res.render('employees',{title: 'Employee List',employees: docs});
 	});
 });
