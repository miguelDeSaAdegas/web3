const mongoose = require('mongoose')
require ("dotenv").config()

const password = process.argv[2]

mongoose.set('strictQuery',false)
mongoose.connect(process.env.MONGO_DB_URL)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

app.get('/api/notes', (request, response) => {
  Note.find({}).then(notes => {
    response.json(notes)
  })
})