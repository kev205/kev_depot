/* eslint-disable */
var http = require('http');
var mysql = require('mysql');
var server = http.createServer((req, res) => {
    var chaine = '';
    res.writeHead(200, {
        'Content-Type': 'text/plain'
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
        res.end(chaine);
        connection.end();
    });
});
server.listen(8080, '192.168.173.1');