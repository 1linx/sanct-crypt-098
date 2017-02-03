var express = require('express');
var app = require('express')();
var bodyParser = require('body-parser')
// create application/json parser
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = function(app) {

    // var mysql = require('mysql');

    // var pool = mysql.createPool({
    // connectionLimit : 10,
    // host     : 'localhost',
    // user     : 'root',
    // password : 'theusual',
    // database : 'chatdb'
    // });

    // app.get('/', function(req, res){
    // res.sendFile(__dirname + '/views/index.html');
    // });

    app.get('/chat', function(req, res) {
            res.render('chat');

        // pool.getConnection(function(err, connection) {

            // connection.query('SELECT * FROM (SELECT * FROM chat_messages ORDER BY created DESC LIMIT 100) AS `table` ORDER by id ASC', function(err, results, fields) {
            // if (err) throw err;

            // res.render('chat', {
            //     results: results
            // });

            // });
            // connection.release();
            
        // });
    });

    // app.post('/post', urlencodedParser, function(req, res) {

    //     if (!req.body) return res.sendStatus(400);

    //     console.log('Data: ' + JSON.stringify(req.body));

    //     var msg = req.body.msg;
    //     var date = new Date().toISOString().slice(0, 23).replace('T', ' ');
    //     console.log(date);
    //     console.log("content of msg: " + msg + " " + typeof msg);

    //     pool.getConnection(function(err, connection) {

    //         connection.query('INSERT INTO chat_messages SET ?', {msg: msg, created: date}, function(err, result) {
    //         if (err) throw err;

    //         connection.release();

    //         });

    //     res.send('Data received: ' + req.body.msg);

    //     });

    // });


    // Old. To be removed
    // app.get('/stored', function(req, res){
    // res.json(results);
    // });


    // app.get('/data', function(req, res) {
    // res.render('data', {
    //     results: results
    // });

    // });


    //static route - style, js, images, etc
    app.use('/static', express.static('./public'));

};
