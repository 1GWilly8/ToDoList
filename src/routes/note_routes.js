// note_routes.js
var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
    app.get('/tasks/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('tasks').findOne(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(item);
            }
        });
    });

    app.get('/tasks', (req, res) => {
        db.collection('tasks').find({}).toArray((err, documents) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(documents);
            }
        });
    });

    app.delete('/tasks/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('tasks').remove(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send("task " + id + " delete!");
            }
        });
    });

    app.put('/tasks/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        const task = {$set: {}};
        for (key in req.body) {
            task['$set'][key] = req.body[key]
        }
        db.collection('tasks').update(details, task, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(task);
            }
        });
    });

    app.post('/tasks', (req, res) => {
        const task = { text: req.body.text, checkboxstate: req.body.checkboxstate };
        console.log(task);
        db.collection('tasks').insert(task, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(result.ops[0]);
            }
        });
    });
};
