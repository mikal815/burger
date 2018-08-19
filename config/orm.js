var connection = require('./connection.js');

var orm = {

	selectAll : function(table, cb){
		connection.query("SELECT * FROM ??",[table], function(err, result) {
			if (err) throw err;
			cb(result); 
		});
	},

	insertOne : function(table, column, value, cb){
		
		connection.query("INSERT INTO ?? (??) VALUES (?)", [table, column, value], function(err, result) {
			if(err) throw err;
			cb(result);
		});
	},

	updateOne: function(table, columnAlter, newValue, columnQuery, valueQuery, cb){

		connection.query("UPDATE ?? SET ?? = ? WHERE ?? = ?", [table, columnAlter, newValue, columnQuery, valueQuery], function(err, result) {
			if(err) throw err;
			cb(result);
		});
	},

	deleteOne: function(table, columnQuery, valueQuery, cb){
		connection.query("DELETE FROM ?? WHERE ?? = ?", [table, columnQuery, valueQuery], function(err, result) {
			if(err) throw err;
			cb(result);
		});
	}
}


module.exports = orm;
