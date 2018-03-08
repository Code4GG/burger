const connection = require('../config/connection.js');


const orm = {
	selectAll: function(tableInput,cb){
		const queryString = `SELECT * FROM ${tableInput;};`
		connection.query(queryString, function(err,result){
			if (err){
				throw err;
			}
			cb(result);
		});
	},
	insertOne: function(table,cols,cb){
		const queryString = `INSERT INTO ${table} (${cols.toString();})`;
		connection.query(queryString, function(err, result){
			if (err){
				throw err;
			}
			cb(result);
		});
	},
	updateOne: function(table, cols, condition, cb){
		const queryString = `UPDATE ${table} SET ${cols.toString();} WHERE ${condition}`;
		connection.query(queryString, function(err, result){
			if (err){
				throw err;
			}
			cb(result);
		})
	}
}

module.exports = orm;