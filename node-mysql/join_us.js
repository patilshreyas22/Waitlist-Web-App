const { faker } = require('@faker-js/faker');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'myapp'
});



var data = [];

for(var i  = 0 ; i < 500 ; i++){
	data.push([
	
	faker.internet.email(),
	faker.date.past()
	
]);
}

var q = 'INSERT INTO users (email , created_at ) VALUES ?';

connection.query(q , [data] , function(error , results){
	
	console.log(error);
	console.log(results);
});

connection.end();