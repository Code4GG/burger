const connection = require('../config/connection.js');

// a function that will be used to build queries
function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push('?');
	}

	return arr.toString();
}

// another function for building queries
function objToSql(ob) {
	var arr = [];

	for (var key in ob) {
		if (ob.hasOwnProperty(key)) {
			arr.push(key + '=' + ob[key]);
		}
	}

	return arr.toString();
}

const orm = {
	selectAll: function(tableInput, cb){
		const queryString = `SELECT * FROM ${tableInput;};`
		connection.query(queryString, function(err,result){
			if (err){
				throw err;
			}
			cb(result);
		});
	},
	insertOne: function(table, cols, vals, cb){
		const queryString = `INSERT INTO ${table} (${cols.toString();}) VALUES ${printQuestionMarks(vals.length);}`;
		connection.query(queryString, vals, function(err, result){
			if (err){
				throw err;
			}
			cb(result);
		});
	},
	updateOne: function(table, objColVals, condition, cb){
		const queryString = `UPDATE ${table} SET ${objToSql(objColVals);} WHERE ${condition}`;
		connection.query(queryString, function(err, result){
			if (err){
				throw err;
			}
			cb(result);
		})
	}
}

module.exports = orm;