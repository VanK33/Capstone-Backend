/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("recipe_ingredient", function (table) {
    table
      .integer("recipes_id")
      .unsigned()
      .references("recipes.id")
      .onDelete("CASCADE");
    table
      .integer("ingredients_id")
      .unsigned()
      .references("ingredients.id")
      .onDelete("CASCADE");
    table.primary(["recipes_id", "ingredients_id"]);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("recipe_ingredient");
};
