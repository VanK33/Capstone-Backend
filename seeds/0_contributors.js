const bcrypt = require("bcrypt");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("contributors").del();
  await knex("contributors").insert([
    {
      id: 1,
      contributor_name: "Suzy Karadsheh",
      username: "testUser1",
      hashed_password: bcrypt.hashSync("testUser1", 10),
    },
    {
      id: 2,
      contributor_name: "John Kanell",
      username: "testUser2",
      hashed_password: bcrypt.hashSync("testUser2", 10),
    },
    {
      id: 3,
      contributor_name: "test",
      username: "test",
      hashed_password: bcrypt.hashSync("test", 10),
    },
  ]);
};
