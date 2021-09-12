require('../src/db/mongoose')
const Task = require('../src/models/Task')

Task.findByIdAndDelete('613d0eb31cee739c3127e100').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
})