/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("table_name").del();
  await knex("table_name").insert([
    {
      recipe_id: 1,
      ingredient_id: 1,
    },
    {
      recipe_id: 1,
      ingredient_id: 2,
    },
    {
      recipe_id: 1,
      ingredient_id: 3,
    },
    {
      recipe_id: 2,
      ingredient_id: 4,
    },
    {
      recipe_id: 2,
      ingredient_id: 5,
    },
    {
      recipe_id: 2,
      ingredient_id: 2,
    },
    {
      recipe_id: 2,
      ingredient_id: 6,
    },
    {
      recipe_id: 3,
      ingredient_id: 7,
    },
    {
      recipe_id: 4,
      ingredient_id: 8,
    },
    {
      recipe_id: 4,
      ingredient_id: 1,
    },
    {
      recipe_id: 4,
      ingredient_id: 2,
    },
    {
      recipe_id: 4,
      ingredient_id: 3,
    },
    {
      recipe_id: 5,
      ingredient_id: 9,
    },
    {
      recipe_id: 5,
      ingredient_id: 6,
    },
    {
      recipe_id: 5,
      ingredient_id: 2,
    },
    {
      recipe_id: 5,
      ingredient_id: 1,
    },
    {
      recipe_id: 5,
      ingredient_id: 3,
    },
    {
      recipe_id: 5,
      ingredient_id: 4,
    },
    {
      recipe_id: 5,
      ingredient_id: 10,
    },
    {
      recipe_id: 6,
      ingredient_id: 11,
    },
    {
      recipe_id: 6,
      ingredient_id: 12,
    },
    {
      recipe_id: 6,
      ingredient_id: 13,
    },
    {
      recipe_id: 6,
      ingredient_id: 1,
    },
    {
      recipe_id: 7,
      ingredient_id: 6,
    },
    {
      recipe_id: 7,
      ingredient_id: 2,
    },
    {
      recipe_id: 7,
      ingredient_id: 4,
    },
    {
      recipe_id: 7,
      ingredient_id: 3,
    },
    {
      recipe_id: 8,
      ingredient_id: 14,
    },
    {
      recipe_id: 8,
      ingredient_id: 15,
    },
    {
      recipe_id: 8,
      ingredient_id: 16,
    },
    {
      recipe_id: 8,
      ingredient_id: 17,
    },
    {
      recipe_id: 8,
      ingredient_id: 6,
    },
    {
      recipe_id: 8,
      ingredient_id: 3,
    },
    {
      recipe_id: 8,
      ingredient_id: 10,
    },
    {
      recipe_id: 9,
      ingredient_id: 19,
    },
    {
      recipe_id: 9,
      ingredient_id: 1,
    },
    {
      recipe_id: 9,
      ingredient_id: 2,
    },
    {
      recipe_id: 9,
      ingredient_id: 20,
    },
    {
      recipe_id: 9,
      ingredient_id: 21,
    },
    {
      recipe_id: 9,
      ingredient_id: 22,
    },
    {
      recipe_id: 9,
      ingredient_id: 6,
    },
    {
      recipe_id: 10,
      ingredient_id: 6,
    },
    {
      recipe_id: 10,
      ingredient_id: 2,
    },
    {
      recipe_id: 10,
      ingredient_id: 21,
    },
    {
      recipe_id: 10,
      ingredient_id: 8,
    },
    {
      recipe_id: 10,
      ingredient_id: 4,
    },
    {
      recipe_id: 10,
      ingredient_id: 3,
    },
    {
      recipe_id: 10,
      ingredient_id: 10,
    },
    {
      recipe_id: 11,
      ingredient_id: 6,
    },
    {
      recipe_id: 11,
      ingredient_id: 2,
    },
    {
      recipe_id: 11,
      ingredient_id: 8,
    },
    {
      recipe_id: 11,
      ingredient_id: 21,
    },
    {
      recipe_id: 11,
      ingredient_id: 11,
    },
    {
      recipe_id: 11,
      ingredient_id: 12,
    },
    {
      recipe_id: 11,
      ingredient_id: 13,
    },
    {
      recipe_id: 11,
      ingredient_id: 1,
    },
    {
      recipe_id: 11,
      ingredient_id: 3,
    },
    {
      recipe_id: 11,
      ingredient_id: 4,
    },
    {
      recipe_id: 12,
      ingredient_id: 6,
    },
    {
      recipe_id: 12,
      ingredient_id: 7,
    },
    {
      recipe_id: 12,
      ingredient_id: 17,
    },
    {
      recipe_id: 12,
      ingredient_id: 21,
    },
    {
      recipe_id: 12,
      ingredient_id: 15,
    },
    {
      recipe_id: 12,
      ingredient_id: 2,
    },
    {
      recipe_id: 12,
      ingredient_id: 3,
    },
    {
      recipe_id: 12,
      ingredient_id: 10,
    },
    {
      recipe_id: 12,
      ingredient_id: 4,
    },
    {
      recipe_id: 13,
      ingredient_id: 6,
    },
    {
      recipe_id: 13,
      ingredient_id: 2,
    },
    {
      recipe_id: 13,
      ingredient_id: 4,
    },
    {
      recipe_id: 13,
      ingredient_id: 3,
    },
    {
      recipe_id: 13,
      ingredient_id: 21,
    },
    {
      recipe_id: 13,
      ingredient_id: 23,
    },
    {
      recipe_id: 13,
      ingredient_id: 1,
    },
    {
      recipe_id: 13,
      ingredient_id: 24,
    },
    {
      recipe_id: 14,
      ingredient_id: 25,
    },
    {
      recipe_id: 14,
      ingredient_id: 4,
    },
    {
      recipe_id: 14,
      ingredient_id: 6,
    },
    {
      recipe_id: 14,
      ingredient_id: 26,
    },
    {
      recipe_id: 14,
      ingredient_id: 1,
    },
    {
      recipe_id: 14,
      ingredient_id: 27,
    },
    {
      recipe_id: 14,
      ingredient_id: 28,
    },
    {
      recipe_id: 14,
      ingredient_id: 29,
    },
    {
      recipe_id: 14,
      ingredient_id: 30,
    },
    {
      recipe_id: 15,
      ingredient_id: 2,
    },
    {
      recipe_id: 15,
      ingredient_id: 12,
    },
    {
      recipe_id: 15,
      ingredient_id: 17,
    },
    {
      recipe_id: 15,
      ingredient_id: 26,
    },
    {
      recipe_id: 15,
      ingredient_id: 27,
    },
    {
      recipe_id: 15,
      ingredient_id: 1,
    },
    {
      recipe_id: 15,
      ingredient_id: 23,
    },
    {
      recipe_id: 15,
      ingredient_id: 3,
    },
    {
      recipe_id: 15,
      ingredient_id: 18,
    },
  ]);
};
