
exports.up = function(knex) {
  return knex.schema
    .createTable('receipe', tbl => {
        tbl.increments('receipe_id')
        tbl.string('receipe_name', 128).notNullable()
        tbl.timestamp('created_at').defaultTo(knex.fn.now())
    })
    .createTable('steps', tbl => {
        tbl.increments('step_id')
        tbl.string('step_instructions').notNullable()
        tbl.integer('step_number')
        tbl.integer('receipe_id')
            .unsigned()
            .references('receipe_id')
            .inTable('receipe')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
    .createTable('ingredients', tbl => {
        tbl.increments('ingredient_id')
        tbl.string('ingredient_name', 128).notNullable()
    })
    .createTable('step_ingredients', tbl => {
        tbl.increments('step_ingredients_id')
        tbl.integer('quantity').notNullable()
        tbl.integer('step_id')
            .unsigned()
            .notNullable()
            .references('step_id')
            .inTable('steps')
        tbl.integer('ingredient_id')
            .unsigned()
            .references('ingredient_id')
            .inTable('ingredients')       
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('step_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('receipe')
};
