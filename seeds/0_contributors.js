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
      hashed_password: "testUser1",
    },
    {
      id: 2,
      contributor_name: "John Kanell",
      username: "testUser2",
      hashed_password: "testUser2",
    },
  ]);
};
