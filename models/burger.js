const orm = require("../config/orm.js");

const burger = {
	selectAll: function(cb){
		orm.selectAll("burgers", function(res){
			cb(res);
		});
	},
	insertOne: function(cols, cb){
		orm.insertOne("burgers", cols, function(res){
			cb(res);
		});
	},
	updateOne: function(cols, condition, cb){
		orm.updateOne("burgers", cols, condition, function(res){
			cb(res);
		});
	}
};

module.exports = burger;