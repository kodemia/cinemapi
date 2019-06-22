const room = require('../../models/sql/room')

function create (number, capacity, category) {
  return room.query()
    .insert({ number, capacity, category })
    .returning('*')
}

function getAll () {
  return room.query().select()
}

function del (id) {
  return room.query().deleteById(id)
}

module.exports = {
  create,
  getAll,
  del
}
