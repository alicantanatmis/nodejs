var http = require("http"),
mysql = require("mysql");

var ipaddr  = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port    = process.env.OPENSHIFT_NODEJS_PORT || 80;

var connection = mysql.createConnection({
user: "adminuvegAVd",
password: "DFMZhg363W8p",
database: "tut"
});

var data;

//http.createServer(function (request, response) {

	connection.query('select * from task_location', function (error, rows, fields) { 
	data = JSON.stringify(rows);
	})
	
	response.setHeader("Content-Type", "x-application/json");
	response.setHeader("Access-Control-Allow-Origin", "*");
	response.end(data);
}).listen(port, ipaddr);




