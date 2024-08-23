const { faker } = require('@faker-js/faker');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',//host name can vary
  user     : 'root',
  database : 'JOIN_US'
});



/* var trial = {
	email : faker.internet.email(),
	created_at : faker.date.past()
	
};


 connection.query('INSERT INTO users SET ?' , trial , function(error , results ){
				 if(error) throw error;
                 console.log(results);
				 });

connection.end();
*/



/*

var trial = {
	email : faker.internet.email(),
	created_at : faker.date.past()
	
};

console.log(trial);

var end_result = connection.query('INSERT INTO users SET ?' , trial , function(error , results ){
				 if(error) throw error;
                 console.log(results);
				 });

console.log(end_result.sql); */



/* INSERTING INTO DATABASE USING NODE CONNECTION TO MYSQL (TAKE 3)

var person = {email : 'honeypaji57@gmail.com'};

connection.query('INSERT INTO users SET ?', person , function (error , results){
	if(error) throw error;
	console.log(results);

});
connection.end();
*/


// INSERTING INTO DATABASE USING NODE CONNECTION TO MYSQL (TAKE 2)

/*var person = {email : faker.internet.email()};

connection.query('INSERT INTO users SET ?', person , function (error , results){
	if(error) throw error;
	console.log(results);

});
connection.end();*/






//INSERTING INTO DATABASE USING NODE CONNECTION TO MYSQL (TAKE 1)
/* 
var a = 'INSERT INTO users (email) VALUES ("rampao34@gmail.com")';
connection.query(a, function (error , results , fields ){
	if(error) throw error;
	console.log(results);

});
connection.end();
*/








// USING NODE AND MYSQL CONNECTION AND GETTING RESULTS 

// var q = 'SELECT CURDATE()';

/* var q = 'SELECT COUNT(*) AS total FROM users';

connection.query(q, function (error , results , fields ){
	
	if(error) throw error;
	console.log(results[0].total);
	
    
	
}); 

connection.end();
*/

// USING FAKER 

/* function generateLocation() {
	
console.log(faker.location.streetAddress());
console.log(faker.location.city());
console.log(faker.location.state());
console.log(faker.date.past().toString());
	
}
generateLocation();
generateLocation();
generateLocation();

 //Root User: root
 //Database Name: mysql
 
 */


// INSERTING LOTS OF DATA =====================================================================

var data = [
           ['hi@gmail.com' , '2017-05-01 08:43:39'],
	       ['helii@gmail.com' , '2017-05-01 08:43:39'],     	
	       ['justin@gmail.com' , '2017-05-01 08:43:39'],     	
	
];

var q = 'INSERT INTO users (email , created_at) VALUES ?';

connection.query(q , [data] , function (err , results ){
	console.log(err);
	console.log(results);
});

connection.end();
