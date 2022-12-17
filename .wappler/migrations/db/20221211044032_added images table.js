
exports.up = function(knex) {
  return knex.schema
    .createTable('images', async function (table) {
      table.increments('id');
      table.string('image', 20);
      table.integer('image_index');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('images')
};
