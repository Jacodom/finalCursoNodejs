var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config = require('../config.js');
var urlProfileImg = 'http://'+config.app.domain+':'+config.app.port+'/img/user.png';
var crypto = require('crypto');

var employeeSchema = new Schema({
	name : String,
	lastname: String,
	emailAdress: {type: String, unique: true},
	password: String,
	img: {type: String, default: urlProfileImg}
});


//encrypt the password before saving the employee
employeeSchema.pre("save", function(next) {
    if(this.isModified('password'))
      this.password = crypto.createHash('md5').update(this.password).digest("hex");
    next();
});

employeeSchema.method('authenticate', function(password){
	return crypto.createHash('md5').update(password).digest("hex") === this.password;
});

var empĺoyeeModel =  mongoose.model('Employees', employeeSchema);

module.exports = empĺoyeeModel;