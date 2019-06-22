const moment = require('moment')

const Schedule = require('../../models/sql/schedule')
const Room = require('../../models/sql/room')
const Movie = require('../../models/sql/movie')

async function create (roomId, movieId, schedule) {
  // verificar si existe la sala
  const room = await Room.query().findById(roomId)
  if (!room) throw new Error('Room does not exist')

  // verificar si existe la pelicula
  const movie = await Movie.query().findById(movieId)
  if (!movie) throw new Error('Movie does not exists')

  // agendar
  return Schedule.query()
    .insert({ roomId, movieId, schedule: moment(schedule) })
    .returning('*')
}

module.exports = {
  create
}
