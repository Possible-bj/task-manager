require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5ea2f072ea24f509acade431').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })

const deleteAndCount = async (id, completed) => {
    const task = await Task.findByIdAndUpdate(id)
    const count = await Task.countDocuments({completed})
    return count 
}

deleteAndCount('5ea2f3b1e18150272c417bcc', false).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})