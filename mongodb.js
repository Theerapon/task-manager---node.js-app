// CRUD create read update dalete

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;
const {MongoClient, ObjectId} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connct to database: ' + error)
    }
    
    const db = client.db(databaseName)
    // ------------------------Find one user------------------------
    // db.collection('users').findOne({
    //     _id: new ObjectId('613ca26eb35555b6b349168b')
    // }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to find user: ' + error)
    //     }
    //     console.log(user)
    // })

    // ------------------------Find many users------------------------
    // db.collection('users').find({
    //      age: 22
    // }).toArray((error, users) => {
    //     if (error) {
    //         return console.log('Unable to find user: ' + error)
    //     }
    //     console.log(users)
    // })

    // ------------------------Count many users------------------------
    // db.collection('users').find({
    //     age: 22
    // }).count((error, count) => {
    //     if (error) {
    //         return console.log('Unable to count user: ' + error)
    //     }
    //     console.log(count)
    // })

    // ------------------------Find one task------------------------
    db.collection('tasks').findOne({
        _id: new ObjectId('613c906af1cce609a5e83e35')
    }, (error, result) => {
        if (error) {
            return console.log('Unable to find task: ' + error)
        }
        console.log(result)
    })

    // ------------------------Find many tasks------------------------
    db.collection('tasks').find().toArray((error, result) => {
        if (error) {
            return console.log('Unable to find task: ' + error)
        }
        console.log(result)
    })


    // ------------------------INSERT------------------------------------------------

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
    // db.collection('tasks').insertMany([
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