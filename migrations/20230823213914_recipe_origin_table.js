/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("recipes_origins", function (table) {
    table
      .integer("recipes_id")
      .unsigned()
      .references("recipes.id")
      .onDelete("CASCADE");
    table
      .integer("origins_id")
      .unsigned()
      .references("origins.id")
      .onDelete("CASCADE");
    table.primary(["recipes_id", "origins_id"]);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("recipes_origins");
};
