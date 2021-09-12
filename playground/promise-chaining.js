require('../src/db/mongoose')
const User = require('../src/models/User')

User.findByIdAndUpdate('613cffd255910de7f6e2dd52', { age: 1 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1})
}).then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
})