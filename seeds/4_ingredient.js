/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("ingredients").del();
  await knex("ingredients").insert([
    {
      id: 1,
      ingredient_name: "lemon",
    },
    {
      id: 2,
      ingredient_name: "garlic",
    },
    {
      id: 3,
      ingredient_name: "parsley",
    },
    {
      id: 4,
      ingredient_name: "tomato",
    },
    {
      id: 5,
      ingredient_name: "carrots",
    },
    {
      id: 6,
      ingredient_name: "onion",
    },
    {
      id: 7,
      ingredient_name: "chickpeas",
    },
    {
      id: 8,
      ingredient_name: "zucchini",
    },
    {
      id: 9,
      ingredient_name: "spaghetti",
    },
    {
      id: 10,
      ingredient_name: "cheese",
    },
    {
      id: 11,
      ingredient_name: "milk",
    },
    {
      id: 12,
      ingredient_name: "flour",
    },
    {
      id: 13,
      ingredient_name: "starch",
    },
    {
      id: 14,
      ingredient_name: "bread",
    },
    {
      id: 15,
      ingredient_name: "cucumber",
    },
    {
      id: 16,
      ingredient_name: "bell pepper",
    },
    {
      id: 17,
      ingredient_name: "cherry tomato",
    },
    {
      id: 18,
      ingredient_name: "chicken broth",
    },
    {
      id: 19,
      ingredient_name: "yogurt",
    },
    {
      id: 20,
      ingredient_name: "pepper",
    },
    {
      id: 21,
      ingredient_name: "celery",
    },
    {
      id: 22,
      ingredient_name: "green onion",
    },
    {
      id: 23,
      ingredient_name: "grapes",
    },
    {
      id: 24,
      ingredient_name: "almonds",
    },
    {
      id: 25,
      ingredient_name: "avocado",
    },
    {
      id: 26,
      ingredient_name: "lime",
    },
    {
      id: 27,
      ingredient_name: "orange",
    },
    {
      id: 28,
      ingredient_name: "tortilla chips",
    },
    {
      id: 29,
      ingredient_name: "mango",
    },
    {
      id: 30,
      ingredient_name: "watermelon radish",
    },
  ]);
};
