const express = require("express");
const router = express.Router();
const burgers = require("../models/burger.js");

router.get('/', function(req,res){
	burgers.selectAll(function(data){
		const obj = {
			burgers: data
		};
		console.log(obj);
		res.render('index',obj);
	});
});

router.post('api/burgers', function(req,res){
	burgers.insertOne(name, [req.body.burger_name], function(result){
		res.json({ id: insertId});
	});
});

router.put('api/burgers/:id', function(req,res){
	const condition = "id = " + req.params.id;

	console.log(condition);

	burgers.updateOne({
		devoured: req.body.devoured
	}, condition, function(result){
		if (result.changedRows === 0){
			return res.status(404).end();
		} else{
			res.status(200).end();
		}
	});
});

