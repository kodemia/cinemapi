const moment = require('moment')

const Schedule = require('../../models/mongo/schedule').model
const Room = require('../../models/mongo/room').model
const Movie = require('../../models/mongo/movie').model

async function create (roomId, movieId, schedule) {
  // verificar movieId
  const movie = await Movie.findById(movieId)
  if (!movie) throw new Error('Movie does not exists')

  // verificar roomId
  const room = await Room.findById(roomId)
  if (!room) throw new Error('Room does not exists')

  // agendar
  return Schedule.create({
    movieId,
    roomId,
    schedule: moment(schedule)
  })
}

module.exports = {
  create
}
