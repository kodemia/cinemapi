const { Schema, model } = require('mongoose')

const movieSchema = new Schema({
  name: {
    type: String,
    minLength: 2,
    maxLength: 50,
    required: true
  },
  genre: {
    type: String,
    minLength: 1,
    required: true
  },
  length: {
    type: Number,
    required: true
  }
})

module.exports = {
  schema: movieSchema,
  model: model('Movie', movieSchema)
}
