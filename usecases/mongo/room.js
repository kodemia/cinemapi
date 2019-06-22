const Room = require('../../models/mongo/room').model

function create (number, capacity, category) {
  return Room.create({ number, capacity, category })
}

function getAll () {
  return Room.find({})
}

module.exports = {
  create,
  getAll
}
