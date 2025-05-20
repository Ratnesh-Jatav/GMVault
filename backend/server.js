const express = require('express')
const dotenv = require('dotenv')
const { MongoClient } = require('mongodb'); 
const bodyparser = require('body-parser')
const cors = require('cors')

dotenv.config()


// Connecting to the MongoDB Client
const url = process.env.MONGO_URI;
const client = new MongoClient(url);
client.connect();

// App & Database
const dbName = process.env.DB_NAME 
const app = express()
const port = 3000 

// Middleware
app.use(bodyparser.json())
app.use(cors())


// Get all the passwords
app.get('/', async (req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.find({}).toArray();
    res.json(findResult)
})

// Save a password
app.post('/', async (req, res) => { 
    const password = req.body
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.insertOne(password);
    res.send({success: true, result: findResult})
})

// Delete a password by id
app.delete('/', async (req, res) => { 
    const password = req.body
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.deleteOne(password);
    res.send({success: true, result: findResult})
})

// Get all the passwords for a user
app.get('/api/passwords', async (req, res) => {
    const { user } = req.query;
    if (!user) return res.status(400).json({ message: 'User required' });
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.find({ user }).toArray();
    res.json(findResult);
});

// Save a password for a user
app.post('/api/passwords', async (req, res) => {
    const { user, site, username, password } = req.body;
    if (!user || !site || !username || !password) {
        return res.status(400).json({ message: 'All fields required' });
    }
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const result = await collection.insertOne({ user, site, username, password });
    res.send({ success: true, result });
});

// Delete a password by id for a user
app.delete('/api/passwords/:id', async (req, res) => {
    const { user } = req.body;
    const { id } = req.params;
    if (!user || !id) return res.status(400).json({ message: 'User and id required' });
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const result = await collection.deleteOne({ _id: new require('mongodb').ObjectId(id), user });
    res.send({ success: true, result });
});

// Update a password by id for a user
app.put('/api/passwords/:id', async (req, res) => {
    const { user, site, username, password } = req.body;
    const { id } = req.params;
    if (!user || !id || !site || !username || !password) {
        return res.status(400).json({ message: 'All fields required' });
    }
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const result = await collection.updateOne(
        { _id: new require('mongodb').ObjectId(id), user },
        { $set: { site, username, password } }
    );
    res.send({ success: true, result });
});


app.listen(port, () => {
    console.log(`Example app listening on  http://localhost:${port}`)
})