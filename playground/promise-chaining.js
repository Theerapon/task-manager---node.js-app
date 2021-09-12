require('../src/db/mongoose')
const User = require('../src/models/User')

// User.findByIdAndUpdate('613cffd255910de7f6e2dd52', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1})
// }).then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age: age })
    const count = await User.countDocuments({ age: age })
    return count
}

updateAgeAndCount('613cffd255910de7f6e2dd52', 22).then((count) => {
    console.log(count)
}).catch((err) => {
    console.log(err)
})