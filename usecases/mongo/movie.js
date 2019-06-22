const Movie = require('../../models/mongo/movie').model

function create (name, genre, length) {
  return Movie.create({ name, genre, length })
}

function getAll () {
  return Movie.find({})
}

function del (id) {
  return Movie.findByIdAndDelete(id)
}

module.exports = {
  create,
  getAll,
  del
}
