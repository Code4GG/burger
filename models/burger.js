const orm = require("../config/orm.js");
// puts the orm into a burger object to be exported to the routes to be interacted with between the database and index
const burger = {
	selectAll: function(cb){
		orm.selectAll('burgers', function(res){
			cb(res);
		});
    },
	insertOne: function(cols, vals, cb){
    	orm.insertOne('burgers', cols, vals, function(res){
      		cb(res);
    	});
 	 },
	updateOne: function(objColVals, condition, cb){
    	orm.updateOne('burgers', objColVals, condition, function(res){
      		cb(res);
    	});
  	}
};

module.exports = burger;