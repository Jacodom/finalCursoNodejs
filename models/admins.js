var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');

var adminSchema = new Schema({
	name: String,
	lastname: String,
	emailAdress: String,
	password: String
});

//encrypt the password before saving the admin
adminSchema.pre("save", function(next) {
    if(this.isModified('password'))
      this.password = crypto.createHash('md5').update(this.password).digest("hex");
    next();
});

adminSchema.method('authenticate', function(password){
	return crypto.createHash('md5').update(password).digest("hex") === this.password;
});

var adminModel = mongoose.model('Admins', adminSchema);

module.exports = adminModel;