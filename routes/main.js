var app = module.parent.exports.app;
var passport = module.parent.exports.passport;
var Employees = require('../models/employees.js');
var Admins = require('../models/admins.js');

app.get('/admin',function(req,res){
	res.render('adminLogin');
});

app.get('/admin/fail',function(req,res){
	res.render('adminLogin',{url:"/admin", flashmsg: "Password or email invalid."});
});

app.post('/admin', 
	passport.authenticate('AdminLogin',
		{
			successRedirect: '/panel',
			failureRedirect: '/admin/fail',
			failureFlash: true,
		})
);


app.get('/panel', function(req, res){
	var msg = req.flash('message');
    res.render('panel', {flashmsg: msg});
});

app.get('/panel/employees',function(req,res){
 	Employees.find({},function(err,docs){
 		res.render('employees',{title: 'Employee List',employees: docs});
 	});
 });

app.get('/panel/employees/new',function(req,res){
	res.render('newEmployee',{title: 'New Employee'});
});

app.post('/panel/employees/new',function(req,res){
	var employees = new Employees({
						name: req.body.name,
						lastname: req.body.lastname,
						emailAdress: req.body.emailAdress,
						password: req.body.password
	});
	employees.save(function(err,doc){
		if(!err){
			res.redirect('/panel/employees');
		}else{
			res.end(err);
		}
	});
});

app.get('/panel/employees/delete/:id',function(req,res){
	Employees.remove({_id: req.params.id},function(err,doc){
		if(!err){
			res.redirect('/panel/employees');
		}else{
			res.end(err);
		}
	});
});

app.get('/panel/employees/edit/:id',function(req,res){
	Employees.findOne({_id: req.params.id},function(err,doc){
		if(!err){
			res.render('editEmployee',{title: 'Edit employee',emp: doc});
		}else{
			res.end(err);
		}
	});
});

app.post('/panel/employees/edit/:id',function(req,res){
	Employees.findOne({_id: req.params.id},function(err,doc){
		if(!err){
			doc.name = req.body.name;
			doc.lastname = req.body.lastname;
			doc.emailAdress = req.body.emailAdress;
			doc.save(function(err,doc){
				if(!err){
					res.redirect('/panel/employees');
				}else{
					res.end(err);
				}
			});
		}else{
			res.end(err);
		}
		
	});
});