const { Model } = require('objection')
const db = require('../../lib/db')

Model.knex(db.sql.knex)

class Schedule extends Model {
  static get tableName () {
    return 'schedule'
  }

  static get jsonSchema () {
    return {
      type: 'object',
      require: ['roomId', 'movieId', 'schedule'],
      properties: {
        roomId: {
          type: 'number'
        },
        movieId: {
          type: 'number'
        },
        schedule: {
          type: 'date-time'
        }
      }
    }
  }
}

module.exports = Schedule
