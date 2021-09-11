// CRUD create read update dalete

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;
const {MongoClient, ObjectId} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectId()
console.log(id.id.length)
console.log(id.getTimestamp())
console.log(id.toHexString())

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connct to database: ' + error)
    }
    
    const db = client.db(databaseName)

    // --------------------------insert one user collection--------------------------
    // db.collection('users').insertOne({
    //     name: 'Theerapon',
    //     age: 22
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.insertedId)
    // })

    // --------------------------insert many user collection--------------------------
    // db.collection('users').insertMany([
    //     { 
    //         name: 'Hen', 
    //         age: 28
    //     },{ 
    //         name: 'Gunther',
    //         age: 28
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert docements')
    //     }

    //     console.log(result.insertedIds)
    // })

    // --------------------------insert many task collection--------------------------
    // db.collection('task').insertMany([
    //     { 
    //         description: 'Clean the house', 
    //         complete: true
    //     },{ 
    //         description: 'Renew inspection',
    //         complete: false
    //     },{ 
    //         description: 'Pot plants',
    //         complete: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert docements')
    //     }

    //     console.log(result.insertedIds)
    // })



})