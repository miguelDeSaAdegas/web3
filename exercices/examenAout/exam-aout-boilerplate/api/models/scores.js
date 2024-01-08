const mongoose = require('mongoose')

const scoreSchema = new mongoose.Schema({
    username: String,
    date: Date,
    score: Number,
    joke: mongoose.Types.ObjectId
})

scoreSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('score', scoreSchema)