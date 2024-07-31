const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'passwalah';
const port = 3000;

client.connect();

// Get passwords
app.get('/', async (req, res) => {
    try {
        const db = client.db(dbName);
        const collection = db.collection('passwords');
        const findResult = await collection.find({}).toArray();
        res.json(findResult);
    } catch (error) {
        console.error('Failed to get passwords:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Save a password (POST) or update a password (PUT)
app.post('/', async (req, res) => {
    try {
        const password = req.body;
        const db = client.db(dbName);
        const collection = db.collection('passwords');
        await collection.insertOne(password);
        res.send({ success: true });
    } catch (error) {
        console.error('Failed to save password:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.put('/', async (req, res) => {
    try {
        const password = req.body;
        const db = client.db(dbName);
        const collection = db.collection('passwords');
        await collection.updateOne(
            { website: password.website, username: password.username },
            { $set: password },
            { upsert: true }
        );
        res.send({ success: true });
    } catch (error) {
        console.error('Failed to update password:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Delete a password
app.delete('/', async (req, res) => {
    try {
        const password = req.body;
        const db = client.db(dbName);
        const collection = db.collection('passwords');
        await collection.deleteOne({ website: password.website, username: password.username });
        res.send({ success: true });
    } catch (error) {
        console.error('Failed to delete password:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
