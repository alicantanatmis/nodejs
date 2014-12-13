var http = require("http"),
mysql = require("mysql");

var connection = mysql.createConnection({
user: "root",
password: "password",
database: "tut"
});

http.createServer(function (request, response) {

connection.query('select * from task_location', function (error, rows, fields) { 

  response.writeHead(200, {'Content-Type': 'x-application/json'});
  response.end(JSON.stringify(rows));
})
}).listen(8080);


