require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('5ea3270340ecac18307a038b', {age: 1}).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count 
}

updateAndCount('5ea2f6709d75b61870322bdf', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})