// server.js

var path = require('path');
var ParseServer = require('parse-server').ParseServer;
const express = require('express');
// const MongoClient    = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '/')));
app.get(express.static(path.join(__dirname, '/')));
var databaseUri = "mongodb://malik:malikL859@ds123182.mlab.com:23182/todolistdb";
var api = new ParseServer({
    databaseURI: databaseUri || 'mongodb://localhost:27017/dev',
    appId: process.env.APP_ID || 'myAppId',
    masterKey: process.env.MASTER_KEY || 'jefe', //Add your master key here. Keep it secret!
    serverURL: process.env.SERVER_URL || 'http://localhost:8000/parse', // Don't forget to change to https if needed
});

// Add headers
app.use(function(req, res, next) {

    // Website you wish to allow to connect
    res.header('Access-Control-Allow-Origin', req.get("origin"));

    // Request methods you wish to allow
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.header('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

var mountPath = process.env.PARSE_MOUNT || '/parse';
app.use(mountPath, api);

var port = process.env.PORT || 8000;
var httpServer = require('http').createServer(app);
httpServer.listen(port, function() {
    console.log('ToDoList is running on port ' + port + '.');
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// MongoClient.connect(db.url, (err, database) => {
//   if (err) return console.log(err)
//require('./src/routes')(app, database);
//   app.listen(port, () => {
//     console.log('We are live on ' + port);
//   });               
// })










app.get('/tasks/:id', (req, res) => {
    var query = new Parse.Query("tasks");
    const id = req.params.id;
    query.get(id, {
        success: function(tasks) {
            // The object was retrieved successfully.
            res.send(response);
        },
        error: function(object, error) {
            // The object was not retrieved successfully.
            // error is a Parse.Error with an error code and message.
        }
    });
});

app.get('/tasks/:checkboxstate', (req, res) => {
    var query = new Parse.Query("tasks");
    query.equalTo("checkboxstate", req.params.checkboxstate)
    query.find({
        success: function(response) {
            // The object was retrieved successfully.
            res.send(response);
        },
        error: function(object, error) {
            // The object was not retrieved successfully.
            // error is a Parse.Error with an error code and message.
        }
    });
});

app.get('/tasks', (req, res) => {
    var query = new Parse.Query("tasks");
    query.find({
        success: function(response) {
            res.send(response);
        },
        error: function(object, error) {
            // The object was not retrieved successfully.
            // error is a Parse.Error with an error code and message.
        }
    });
});

app.delete('/tasks/:id', (req, res) => {
    var tasks = Parse.Object.extend("tasks");
    var query = new Parse.Query(tasks);
    const id = req.params.id;
    query.get(id, {
        success: function(task) {
            task.destroy({
                success: function(task) {
                    res.send(task);
                },
                error: function(object, error) {

                }
            })
        },
        error: function(object, error) {
            // The object was not retrieved successfully.
            // error is a Parse.Error with an error code and message.
        }
    });

});

app.put('/tasks/:id', (req, res) => {
    var query = new Parse.Query("tasks");
    const id = req.params.id;
    query.get(id, {
        success: function(task) {
            task.set("checkboxstate", req.body.checkboxstate);
            task.save({
                success: function(task) {
                    res.send(task);
                },
                error: function(object, error) {

                }
            })
        },
        error: function(object, error) {
            // The object was not retrieved successfully.
            // error is a Parse.Error with an error code and message.
        }
    });
});

app.post('/tasks', (req, res) => {
    var tasks = Parse.Object.extend("tasks");
    var task = new tasks();
        task.save({checkboxstate: req.body.checkboxstate, text: req.body.text}, {
        success: function(task) {
            res.send(task);
        },
        error: function(object, error) {

        }
    });
});
