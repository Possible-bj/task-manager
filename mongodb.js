// CRUD create read upload delete
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect( connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)
//     db.collection('tasks').insertMany([
//         {
//         description: 'Clean the house',
//         completed: true
//     },{
//         description: 'Sort the clothes',
//         completed: false
//     },{
//         description: 'Download Venom 2',
//         completed: false
//     },{
//         description: 'Clean the pillow case',
//         completed: true
//     }
// ], (error, result) => {
//         if (error) {
//             return console.log('Unable to insert user')
//         }

//         console.log(result.ops)
//     })

db.collection('tasks').find({ completed: false }).toArray((error, task) => {
    console.log(task)
})
// db.collection('task').find({ age: 24}).toArray((error, user) => {
//     console.log(user)
// })

// db.collection('users').find({ age: 24}).count((error, count) => {
//     console.log(count)
// })


})


// /Users/DELL/mongodb/bin/mongod.exe --dbpath=/c/Users/DELL/mongodb-data