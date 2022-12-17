
exports.up = function(knex) {
  return knex.schema
    .table('images', async function (table) {
      table.string('image_alt');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('images', async function (table) {
      table.dropColumn('image_alt');
    })
};
