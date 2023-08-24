/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("meat").del();
  await knex("meat").insert([
    {
      id: 1,
      meat_name: "Chicken",
    },
    {
      id: 2,
      meat_name: "Beef",
    },
    {
      id: 3,
      meat_name: "Shrimp",
    },
    {
      id: 4,
      meat_name: "Calamari",
    },
    {
      id: 5,
      meat_name: "Turkey",
    },
    {
      id: 6,
      meat_name: "Pork",
    },
    {
      id: 7,
      meat_name: "Vegetarian",
    },
    {
      id: 8,
      meat_name: "Vegan",
    },
  ]);
};
