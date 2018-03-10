const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

//redirects to index on start
router.get('/', function(req,res){
	res.redirect('/index');
})
//displays all the burger data from the database
router.get('/index', function(req,res){
	burger.selectAll(function(data){
		const hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});
//adds new burgers to the database/view
router.post('/api/burgers', function(req, res) {
	burger.insertOne(['burger_name', 'devoured'], [req.body.name, false], function() {
		res.redirect('/index');
	});
});

//changes the burger after its devoured
router.put('/api/burgers/:id', function(req, res) {
	var condition = 'id = ' + req.params.id;
	console.log('condition', condition);

	burger.updateOne({devoured: req.body.devoured}, condition, function() {
		res.redirect('/index');
	});
});

module.exports = router;