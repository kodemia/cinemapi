const { Model } = require('objection')
const db = require('../../lib/db')

Model.knex(db.sql.knex)

class Room extends Model {
  static get tableName () {
    return 'room'
  }

  static get jsonSchema () {
    return {
      type: 'object',
      require: ['number', 'capacity', 'category'],
      properties: {
        number: {
          type: 'number'
        },
        capacity: {
          type: 'number'
        },
        category: {
          type: 'string'
        }
      }
    }
  }
}

module.exports = Room
