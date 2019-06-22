
const Movie = require('../../models/sql/movie')

function create (name, genre, length) {
  return Movie.query()
    .insert({ name, genre, length })
    .returning('*')
}

function getAll () {
  return Movie.query().select()
}

function del (id) {
  return Movie.query().deleteById(id)
}

module.exports = {
  create,
  getAll,
  del
}
