/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("recipes", (table) => {
    table.increments("id").primary();
    table.string("recipe_name").notNullable();
    table.integer("contributor_id").unsigned().references("contributors.id");
    table.string("youtube_link").notNullable();
    table.string("secondary_link");
    table.integer("meat_id").unsigned().references("meat.id");
    table.integer("likes").notNullable();
    // future plan: Add comments for each recipe
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("recipes");
};
