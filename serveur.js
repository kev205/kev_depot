/* eslint-disable */
var http = require('http');
var mysql = require('mysql');
var fs = require('fs');
var path = require('path');

var server = http.createServer((req, res) => {
    var chaine = '';
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "agenda"
    });
    var sql_request = 'select * from user';
    connection.query(sql_request, (error, result, col) => {
        if (error) {
            console.log(error);
            connection.end();
            return;
        }
        if (result.length > 0) {
            for (let val of result) {
                chaine += JSON.stringify(val);
            }
        } else chaine = 'vide';
        if (req.url == '/') {
            fs.readFile(path.join(__dirname, 'vues/connexion.html'), (err, data) => {
                if (err)
                    res.end(err);
                else res.end(data);
            });
        }
        if (req.url == '/subcribe');
        connection.end();
    });
});
server.listen(8080, '192.168.173.1');