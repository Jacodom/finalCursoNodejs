var app = module.parent.exports.app;

app.get('/panel', function(req, res){
    res.render('panel');
});
