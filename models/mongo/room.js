const { Schema, model } = require('mongoose')

const roomSchema = new Schema({
  number: {
    type: Number,
    required: true
  },
  capacity: {
    type: Number,
    minLength: 1,
    required: true
  },
  category: {
    type: String,
    required: true
  }
})

module.exports = {
  schema: roomSchema,
  model: model('Room', roomSchema)
}
