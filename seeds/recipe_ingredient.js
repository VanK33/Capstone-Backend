/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("recipe_ingredient").del();
  await knex("recipe_ingredient").insert([
    {
      recipes_id: 1,
      ingredients_id: 1,
    },
    {
      recipes_id: 1,
      ingredients_id: 2,
    },
    {
      recipes_id: 1,
      ingredients_id: 3,
    },
    {
      recipes_id: 2,
      ingredients_id: 4,
    },
    {
      recipes_id: 2,
      ingredients_id: 5,
    },
    {
      recipes_id: 2,
      ingredients_id: 2,
    },
    {
      recipes_id: 2,
      ingredients_id: 6,
    },
    {
      recipes_id: 3,
      ingredients_id: 7,
    },
    {
      recipes_id: 4,
      ingredients_id: 8,
    },
    {
      recipes_id: 4,
      ingredients_id: 1,
    },
    {
      recipes_id: 4,
      ingredients_id: 2,
    },
    {
      recipes_id: 4,
      ingredients_id: 3,
    },
    {
      recipes_id: 5,
      ingredients_id: 9,
    },
    {
      recipes_id: 5,
      ingredients_id: 6,
    },
    {
      recipes_id: 5,
      ingredients_id: 2,
    },
    {
      recipes_id: 5,
      ingredients_id: 1,
    },
    {
      recipes_id: 5,
      ingredients_id: 3,
    },
    {
      recipes_id: 5,
      ingredients_id: 4,
    },
    {
      recipes_id: 5,
      ingredients_id: 10,
    },
    {
      recipes_id: 6,
      ingredients_id: 11,
    },
    {
      recipes_id: 6,
      ingredients_id: 12,
    },
    {
      recipes_id: 6,
      ingredients_id: 13,
    },
    {
      recipes_id: 6,
      ingredients_id: 1,
    },
    {
      recipes_id: 7,
      ingredients_id: 6,
    },
    {
      recipes_id: 7,
      ingredients_id: 2,
    },
    {
      recipes_id: 7,
      ingredients_id: 4,
    },
    {
      recipes_id: 7,
      ingredients_id: 3,
    },
    {
      recipes_id: 8,
      ingredients_id: 14,
    },
    {
      recipes_id: 8,
      ingredients_id: 15,
    },
    {
      recipes_id: 8,
      ingredients_id: 16,
    },
    {
      recipes_id: 8,
      ingredients_id: 17,
    },
    {
      recipes_id: 8,
      ingredients_id: 6,
    },
    {
      recipes_id: 8,
      ingredients_id: 3,
    },
    {
      recipes_id: 8,
      ingredients_id: 10,
    },
    {
      recipes_id: 9,
      ingredients_id: 19,
    },
    {
      recipes_id: 9,
      ingredients_id: 1,
    },
    {
      recipes_id: 9,
      ingredients_id: 2,
    },
    {
      recipes_id: 9,
      ingredients_id: 20,
    },
    {
      recipes_id: 9,
      ingredients_id: 21,
    },
    {
      recipes_id: 9,
      ingredients_id: 22,
    },
    {
      recipes_id: 9,
      ingredients_id: 6,
    },
    {
      recipes_id: 10,
      ingredients_id: 6,
    },
    {
      recipes_id: 10,
      ingredients_id: 2,
    },
    {
      recipes_id: 10,
      ingredients_id: 21,
    },
    {
      recipes_id: 10,
      ingredients_id: 8,
    },
    {
      recipes_id: 10,
      ingredients_id: 4,
    },
    {
      recipes_id: 10,
      ingredients_id: 3,
    },
    {
      recipes_id: 10,
      ingredients_id: 10,
    },
    {
      recipes_id: 11,
      ingredients_id: 6,
    },
    {
      recipes_id: 11,
      ingredients_id: 2,
    },
    {
      recipes_id: 11,
      ingredients_id: 8,
    },
    {
      recipes_id: 11,
      ingredients_id: 21,
    },
    {
      recipes_id: 11,
      ingredients_id: 11,
    },
    {
      recipes_id: 11,
      ingredients_id: 12,
    },
    {
      recipes_id: 11,
      ingredients_id: 13,
    },
    {
      recipes_id: 11,
      ingredients_id: 1,
    },
    {
      recipes_id: 11,
      ingredients_id: 3,
    },
    {
      recipes_id: 11,
      ingredients_id: 4,
    },
    {
      recipes_id: 12,
      ingredients_id: 6,
    },
    {
      recipes_id: 12,
      ingredients_id: 7,
    },
    {
      recipes_id: 12,
      ingredients_id: 17,
    },
    {
      recipes_id: 12,
      ingredients_id: 21,
    },
    {
      recipes_id: 12,
      ingredients_id: 15,
    },
    {
      recipes_id: 12,
      ingredients_id: 2,
    },
    {
      recipes_id: 12,
      ingredients_id: 3,
    },
    {
      recipes_id: 12,
      ingredients_id: 10,
    },
    {
      recipes_id: 12,
      ingredients_id: 4,
    },
    {
      recipes_id: 13,
      ingredients_id: 6,
    },
    {
      recipes_id: 13,
      ingredients_id: 2,
    },
    {
      recipes_id: 13,
      ingredients_id: 4,
    },
    {
      recipes_id: 13,
      ingredients_id: 3,
    },
    {
      recipes_id: 13,
      ingredients_id: 21,
    },
    {
      recipes_id: 13,
      ingredients_id: 23,
    },
    {
      recipes_id: 13,
      ingredients_id: 1,
    },
    {
      recipes_id: 13,
      ingredients_id: 24,
    },
    {
      recipes_id: 14,
      ingredients_id: 25,
    },
    {
      recipes_id: 14,
      ingredients_id: 4,
    },
    {
      recipes_id: 14,
      ingredients_id: 6,
    },
    {
      recipes_id: 14,
      ingredients_id: 26,
    },
    {
      recipes_id: 14,
      ingredients_id: 1,
    },
    {
      recipes_id: 14,
      ingredients_id: 27,
    },
    {
      recipes_id: 14,
      ingredients_id: 28,
    },
    {
      recipes_id: 14,
      ingredients_id: 29,
    },
    {
      recipes_id: 14,
      ingredients_id: 30,
    },
    {
      recipes_id: 15,
      ingredients_id: 2,
    },
    {
      recipes_id: 15,
      ingredients_id: 12,
    },
    {
      recipes_id: 15,
      ingredients_id: 17,
    },
    {
      recipes_id: 15,
      ingredients_id: 26,
    },
    {
      recipes_id: 15,
      ingredients_id: 27,
    },
    {
      recipes_id: 15,
      ingredients_id: 1,
    },
    {
      recipes_id: 15,
      ingredients_id: 23,
    },
    {
      recipes_id: 15,
      ingredients_id: 3,
    },
    {
      recipes_id: 15,
      ingredients_id: 18,
    },
    {
      recipes_id: 16,
      ingredients_id: 21,
    },
    {
      recipes_id: 16,
      ingredients_id: 22,
    },
    {
      recipes_id: 16,
      ingredients_id: 23,
    },
    {
      recipes_id: 16,
      ingredients_id: 1,
    },
    {
      recipes_id: 16,
      ingredients_id: 24,
    },
    {
      recipes_id: 17,
      ingredients_id: 25,
    },
    {
      recipes_id: 17,
      ingredients_id: 4,
    },
    {
      recipes_id: 17,
      ingredients_id: 6,
    },
    {
      recipes_id: 17,
      ingredients_id: 26,
    },
    {
      recipes_id: 17,
      ingredients_id: 1,
    },
    {
      recipes_id: 17,
      ingredients_id: 27,
    },
    {
      recipes_id: 17,
      ingredients_id: 28,
    },
    {
      recipes_id: 17,
      ingredients_id: 29,
    },
    {
      recipes_id: 17,
      ingredients_id: 12,
    },
    {
      recipes_id: 17,
      ingredients_id: 30,
    },
  ]);
};
