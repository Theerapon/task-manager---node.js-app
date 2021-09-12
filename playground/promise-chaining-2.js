require('../src/db/mongoose')
const Task = require('../src/models/Task')

// Task.findByIdAndDelete('613d0eb31cee739c3127e100').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('613e325451351a2f15d359e0').then(count => {
    console.log(count)
}).catch((err) => {
    console.log(err)
})