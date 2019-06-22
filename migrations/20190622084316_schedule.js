
const TABLE_NAME = 'schedule'

exports.up = async (knex) => {
  const tableAlreadyExists = await knex.schema.hasTable(TABLE_NAME)
  if (tableAlreadyExists) return knex

  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments('id')

    table.integer('movie_id')
    table.foreign('movie_id').references('movie.id')

    table.integer('room_id')
    table.foreign('room_id').references('room.id')

    table.datetime('schedule')

    table.boolean('is_deleted').defaultTo(false)
  })
}

exports.down = (knex) => knex.schema.dropTableIfExists(TABLE_NAME)
