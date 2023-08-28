/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("contributors", (table) => {
    table.increments("id").primary();
    table.string("contributor_name").notNullable();
    table.string("username").unique().notNullable();
    table.string("hashed_password").notNullable();
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
