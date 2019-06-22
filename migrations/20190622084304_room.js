
const TABLE_NAME = 'room'

exports.up = async (knex) => {
  const tableAlreadyExists = await knex.schema.hasTable(TABLE_NAME)
  if (tableAlreadyExists) return knex

  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments('id')

    table.integer('number', 20)
    table.integer('capacity')
    table.string('category', 20)

    table.boolean('is_deleted').defaultTo(false)
  })
}

exports.down = (knex) => knex.schema.dropTableIfExists(TABLE_NAME)
