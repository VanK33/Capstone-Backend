/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("contributors", (table) => {
    table.increments("id").primary();
    table.string("contributor_name").notNullable();
    // table.integer("recipe_id").unsigned().references("recipe.id");
    //maybe some other user assoicated details, can be added later
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("contributors");
};
