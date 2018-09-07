
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comics', function (table) {
    table.increments('id')
    table.string('comicImage')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comics')
};
