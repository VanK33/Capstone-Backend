/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("meat", (table) => {
    table.increments("id").primary();
    table.string("meat_name").notNullable();
    // table.integer("recipe_id").unsigned().references("authors.id");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("meat");
};
