const { Schema, model } = require('mongoose')

const scheduleSchema = new Schema({
  roomId: {
    type: String,
    required: true
  },
  movieId: {
    type: String,
    minLength: 1,
    required: true
  },
  schedule: {
    type: Date,
    required: true
  }
})

module.exports = {
  schema: scheduleSchema,
  model: model('Schedule', scheduleSchema)
}
