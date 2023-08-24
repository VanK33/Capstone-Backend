/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("recipes_origins").del();
  await knex("recipes_origins").insert([
    {
      recipes_id: 1,
      origins_id: 1,
    },
    {
      recipes_id: 2,
      origins_id: 1,
    },
    {
      recipes_id: 3,
      origins_id: 1,
    },
    {
      recipes_id: 4,
      origins_id: 1,
    },
    {
      recipes_id: 5,
      origins_id: 1,
    },
    {
      recipes_id: 5,
      origins_id: 4,
    },
    {
      recipes_id: 6,
      origins_id: 1,
    },
    {
      recipes_id: 7,
      origins_id: 1,
    },
    {
      recipes_id: 7,
      origins_id: 4,
    },
    {
      recipes_id: 8,
      origins_id: 1,
    },
    {
      recipes_id: 8,
      origins_id: 5,
    },
    {
      recipes_id: 9,
      origins_id: 1,
    },
    {
      recipes_id: 9,
      origins_id: 5,
    },
    {
      recipes_id: 10,
      origins_id: 1,
    },
    {
      recipes_id: 11,
      origins_id: 1,
    },
    {
      recipes_id: 12,
      origins_id: 1,
    },
    {
      recipes_id: 13,
      origins_id: 2,
    },
    {
      recipes_id: 13,
      origins_id: 6,
    },
    {
      recipes_id: 14,
      origins_id: 2,
    },
    {
      recipes_id: 14,
      origins_id: 6,
    },
    {
      recipes_id: 15,
      origins_id: 2,
    },
    {
      recipes_id: 15,
      origins_id: 6,
    },
    {
      recipes_id: 16,
      origins_id: 2,
    },
    {
      recipes_id: 16,
      origins_id: 6,
    },
  ]);
};
