/* eslint-disable */
var mysql = require('mysql');
var fs = require('fs');
var path = require('path');
var path = require('path');
var express = require('express');
var app = express();

function connector() {
    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "agenda"
    });
    return connection;
}

var db = connector();
var chaine = '';

app.get('/', (req, res) => {
    db.query('SELECT * FROM user', (err, data) => {
        if (err) {
            console.log(err);
            return;
        } else {
            for (let val of data) {
                chaine += JSON.stringify(data);
            }
        }
    });
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(path.join(__dirname, 'vues/connexion.html'));
}).get('*', (req, res) => {
    res.status(404);
    res.sendFile(path.join(__dirname, 'vues/404.html'));
});

app.listen(8080);