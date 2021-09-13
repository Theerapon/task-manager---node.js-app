const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    }
})

userSchema.pre('save', function (next) {
    console.log('task just before save')
    next()
})

const Task = mongoose.model('Task', userSchema)

module.exports = Task