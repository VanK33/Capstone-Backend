/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("origins").del();
  await knex("origins").insert([
    {
      id: 1,
      origin: "EU",
    },
    {
      id: 2,
      origin: "NA",
    },
    {
      id: 3,
      origin: "SA",
    },
    {
      id: 4,
      origin: "Italian",
    },
    {
      id: 5,
      origin: "Greek",
    },
    {
      id: 6,
      origin: "US",
    },
  ]);
};
