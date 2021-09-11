// CRUD create read update dalete

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connct to database: ' + error)
    }
    
    const db = client.db(databaseName)
    db.collection('users').insertOne({
        name: 'Theerapon',
        age: 22
    })
})