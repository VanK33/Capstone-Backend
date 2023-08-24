/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("tastes").del();
  await knex("tastes").insert([
    {
      id: 1,
      taste_name: "sour",
    },
    {
      id: 2,
      taste_name: "sweet",
    },
    {
      id: 3,
      taste_name: "salty",
    },
    {
      id: 4,
      taste_name: "spicy",
    },
  ]);
};
