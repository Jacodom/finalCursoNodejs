var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config = require('../config');
var urlProfileImg = 'http://'+config.app.domain+':'+config.app.port+'/img/user.png';

var employeeSchema = new Schema({
	name : String,
	lastname: String,
	emailAdress: {type: String, unique: true},
	password: String,
	img: {type: String, default: urlProfileImg}, 
});

var empĺoyeeModel =  mongoose.model('Employees', employeeSchema);

module.exports = empĺoyeeModel;