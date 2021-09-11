const mongoose = require('mongoose')
const validator = require('validator')

const connectionURL = 'mongodb://127.0.0.1:27017/task-manager-api'
mongoose.connect(connectionURL)

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }  
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain password characters')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    },
})

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    }
})


// const me = new User({
//     name: '   Theerapon',
//     email: 'Theerapon@gMail.Com    ',
//     password: ' jofiwkssf93!   '
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error: ' + error)
// })

const task = new Task({
    description: 'Computer description',
})

task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log('Error: ' + error)
})

