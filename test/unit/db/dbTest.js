var config = require('../../../config.js');
var mongoose = require('mongoose');
var url = config.mongoDB.url;

describe('Database Test', function(){
	describe("#MongoDB connection.",function(){
		it('Should connect to the db whitout errors',function(done){
			mongoose.connect(url, function(err){
			if(err) throw err;
			done();
		});
		});
	});
});