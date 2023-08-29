/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("recipe_tastes", function (table) {
    table
      .integer("recipes_id")
      .unsigned()
      .references("recipes.id")
      .onDelete("CASCADE");
    table
      .integer("tastes_id")
      .unsigned()
      .references("tastes.id")
      .onDelete("CASCADE");
    table.primary(["recipes_id", "tastes_id"]);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("recipe_tastes");
};
