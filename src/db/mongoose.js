const mongoose = require('mongoose')

const connectionURL = 'mongodb://127.0.0.1:27017/task-manager-api'
mongoose.connect(connectionURL)

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    },
})

const me = new User({
    name: 'Mi',
    age: 22
})

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log('Error: ' + error)
})