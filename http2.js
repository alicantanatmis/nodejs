var http = require("http"),
mysql = require("mysql");

var connection = mysql.createConnection({
user: "root",
password: "password",
database: "tut"
});

var data;

http.createServer(function (request, response) {

	connection.query('select * from task_location', function (error, rows, fields) { 
	data = JSON.stringify(rows);
	})
	
	response.setHeader("Content-Type", "x-application/json");
	response.setHeader("Access-Control-Allow-Origin", "*");
	response.end(data);
}).listen(8080, "0.0.0.0");




