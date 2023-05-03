const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const blogSchemma = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: String,
  url: {
    type: String,
    required: true
  },
  likes: Number
})

blogSchemma.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

blogSchemma.plugin(uniqueValidator)

module.exports = mongoose.model('Blog', blogSchemma)

