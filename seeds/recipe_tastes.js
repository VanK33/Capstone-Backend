/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("recipe_tastes").del();
  await knex("recipe_tastes").insert([
    {
      recipes_id: 1,
      tastes_id: 1,
    },
    {
      recipes_id: 2,
      tastes_id: 1,
    },
    {
      recipes_id: 3,
      tastes_id: 3,
    },
    {
      recipes_id: 3,
      tastes_id: 1,
    },
    {
      recipes_id: 4,
      tastes_id: 3,
    },
    {
      recipes_id: 4,
      tastes_id: 1,
    },
    {
      recipes_id: 5,
      tastes_id: 3,
    },
    {
      recipes_id: 6,
      tastes_id: 4,
    },
    {
      recipes_id: 6,
      tastes_id: 3,
    },
    {
      recipes_id: 7,
      tastes_id: 4,
    },
    {
      recipes_id: 7,
      tastes_id: 3,
    },
    {
      recipes_id: 8,
      tastes_id: 3,
    },
    {
      recipes_id: 9,
      tastes_id: 3,
    },
    {
      recipes_id: 9,
      tastes_id: 1,
    },
    {
      recipes_id: 9,
      tastes_id: 4,
    },
    {
      recipes_id: 10,
      tastes_id: 3,
    },
    {
      recipes_id: 10,
      tastes_id: 4,
    },
    {
      recipes_id: 11,
      tastes_id: 3,
    },
    {
      recipes_id: 12,
      tastes_id: 3,
    },
    {
      recipes_id: 13,
      tastes_id: 3,
    },
    {
      recipes_id: 14,
      tastes_id: 3,
    },
    {
      recipes_id: 15,
      tastes_id: 3,
    },
    {
      recipes_id: 16,
      tastes_id: 1,
    },
    {
      recipes_id: 17,
      tastes_id: 1,
    },
    {
      recipes_id: 17,
      tastes_id: 4,
    },
  ]);
};
