const { Schema, model } = require('mongoose')

const scheduleSchema = new Schema({
  room_id: {
    type: String,
    required: true
  },
  movie_id: {
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
