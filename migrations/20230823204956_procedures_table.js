/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("procedures", (table) => {
    table.increments("id").primary();
    table.string("procedure_steps").notNullable();
    table
      .integer("recipes_id")
      .unsigned()
      .references("recipes.id")
      .onDelete("CASCADE");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("procedures");
};
