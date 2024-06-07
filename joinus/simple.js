var express = require('express');
var session = require('express-session');
var app = express();
var mysql = require('mysql');
var bodyParser = require("body-parser");
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(__dirname + "/public"));
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));



var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'myapp'
});


app.get("/" , function(req , res){
	    var q = 'SELECT COUNT(*) AS count FROM users';
	connection.query(q , function(err , results){
		if(err) {
			console.error(err);
			res.status(500).send("Internal Server Error");
			return;
		}
		var totalcount = results[0].count;
		// var msg = "We have " + results[0].total + " users";
		//res.send(msg);
		res.render("home" , {data: totalcount});
		//console.log("Someone Requested Our Homepage");
	});
		});

app.post("/register", function(req , res ){
	var person = {
	    email : req.body.email	
	};
	connection.query('INSERT INTO users SET ?', person , function(err , result ){
		if (err) {
			console.error(err);
			res.status(500).send("Internal Server Error");
			return;
		}
		req.session.registrationSuccess = true;
		res.redirect("/thankyou");
	});
});

app.get("/thankyou", function (req, res) {
    // Check if the session variable is present
    if (req.session.registrationSuccess) {
        // Render the "Thank You" page
        res.render("thankyou");

        // Clear the session variable to prevent displaying the message on subsequent reloads
        req.session.registrationSuccess = false;
    } else {
        // Redirect to the homepage if the session variable is not present
        res.redirect("/");
    }
});

app.listen(3000, function(){
	console.log("This Server is running on 3000!");
});

