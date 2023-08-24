/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("recipes").del();
  await knex("recipes").insert([
    {
      id: 1,
      recipe_name: "Lemon Garlic Chicken",
      contributor_id: 1,
      youtube_link: "https://www.youtube.com/watch?v=jvQKp7pVhF0",
      secondary_link:
        "https://www.themediterraneandish.com/lemon-garlic-chicken/",
      meat_id: 1,
      likes: 77,
    },
    {
      id: 2,
      recipe_name: "Roasted Tomato Basil Soup",
      contributor_id: 1,
      youtube_link:
        "https://www.youtube.com/watch?v=wnyy-j3lwik&list=PLNLLLtGyGf0Br47NGQ7fII1QFS3UrkMZv&index=10",
      secondary_link:
        "https://www.themediterraneandish.com/vegan-roasted-tomato-basil-soup/#wprm-recipe-container-31232",
      meat_id: 8,
      likes: 0,
    },
    {
      id: 3,
      recipe_name: "Hummus",
      contributor_id: 1,
      youtube_link:
        "https://www.youtube.com/watch?v=vj1xPYh1gJ4&list=PLNLLLtGyGf0Br47NGQ7fII1QFS3UrkMZv&index=3",
      secondary_link:
        "https://www.themediterraneandish.com/how-to-make-hummus/#tasty-recipes-15161-jump-target",
      meat_id: 8,
      likes: 0,
    },
    {
      id: 4,
      recipe_name: "Grilled Zucchini Salad",
      contributor_id: 1,
      youtube_link:
        "https://www.youtube.com/watch?v=5LL5FUbU3vw&list=PLNLLLtGyGf0Br47NGQ7fII1QFS3UrkMZv&index=30",
      secondary_link:
        "https://www.themediterraneandish.com/grilled-zucchini-salad-mediterranean/",
      meat_id: 8,
      likes: 0,
    },
    {
      id: 5,
      recipe_name: "Garlic Shrimp Pasta",
      contributor_id: 1,
      youtube_link:
        "https://www.youtube.com/watch?v=VaBFU7MNFGI&list=PLNLLLtGyGf0CLVTo12ClKSb2INcIfp-Kt&index=16",
      secondary_link:
        "https://www.themediterraneandish.com/shrimp-pasta-recipe/#wprm-recipe-container-36551",
      meat_id: 3,
      likes: 0,
    },
    {
      id: 6,
      recipe_name: "Crispy Fried Calamari",
      contributor_id: 1,
      youtube_link:
        "https://www.youtube.com/watch?v=VcxMq33G-Do&list=PLNLLLtGyGf0CLVTo12ClKSb2INcIfp-Kt&index=18",
      secondary_link:
        "https://www.themediterraneandish.com/fried-calamari-recipe/",
      meat_id: 4,
      likes: 0,
    },
    {
      id: 7,
      recipe_name: "Shrimp Fra Diavolo",
      contributor_id: 1,
      youtube_link:
        "https://www.youtube.com/watch?v=JnkWOB6Y0L8&list=PLNLLLtGyGf0CLVTo12ClKSb2INcIfp-Kt&index=25",
      secondary_link:
        "https://www.themediterraneandish.com/shrimp-fra-diavolo/",
      meat_id: 3,
      likes: 0,
    },
    {
      id: 8,
      recipe_name: "Greek Pasta Salad",
      contributor_id: 1,
      youtube_link:
        "https://www.youtube.com/watch?v=8OIDpr9F0Mo&list=PLNLLLtGyGf0CdKbZQ8CuU4qI_jNRvoIRo&index=20",
      secondary_link: "https://www.themediterraneandish.com/greek-pasta-salad/",
      meat_id: 8,
      likes: 0,
    },
    {
      id: 9,
      recipe_name: "Greek Chicken Gyros",
      contributor_id: 1,
      youtube_link:
        "https://www.youtube.com/watch?v=5X70AzrvTKk&list=PLNLLLtGyGf0A_z8BiZNxwNpWBRWUTvu9x&index=4",
      secondary_link:
        "https://www.themediterraneandish.com/chicken-gyro-recipe/",
      meat_id: 1,
      likes: 0,
    },
    {
      id: 10,
      recipe_name: "Chicken Stew",
      contributor_id: 1,
      youtube_link:
        "https://www.youtube.com/watch?v=0eUqmp64Z4o&list=PLNLLLtGyGf0A_z8BiZNxwNpWBRWUTvu9x&index=19",
      secondary_link:
        "https://www.themediterraneandish.com/Chicken-Stew-Recipe/",
      meat_id: 1,
      likes: 0,
    },
    {
      id: 11,
      recipe_name: "Lemon Chicken Piccata",
      contributor_id: 1,
      youtube_link:
        "https://www.youtube.com/watch?v=Ue6P8znS9Pk&list=PLNLLLtGyGf0A_z8BiZNxwNpWBRWUTvu9x&index=18",
      secondary_link:
        "https://www.themediterraneandish.com/lemon-chicken-piccata/#wprm-recipe-container-32439",
      meat_id: 1,
      likes: 0,
    },
    {
      id: 12,
      recipe_name: "Creamy Chicken Pasta",
      contributor_id: 1,
      youtube_link:
        "https://www.youtube.com/watch?v=E_MTUFHVSg8&list=PLNLLLtGyGf0A_z8BiZNxwNpWBRWUTvu9x&index=32",
      secondary_link:
        "https://www.themediterraneandish.com/chicken-pasta-recipe/",
      meat_id: 1,
      likes: 0,
    },
    {
      id: 13,
      recipe_name: "Turkey Chili",
      contributor_id: 2,
      youtube_link: "https://www.youtube.com/watch?v=msChF4tLnsI",
      secondary_link: "https://preppykitchen.com/turkey-chili-verde/",
      meat_id: 5,
      likes: 0,
    },
    {
      id: 14,
      recipe_name: "Corn Chowder",
      contributor_id: 2,
      youtube_link: "https://www.youtube.com/watch?v=XjBBqQqT5DA",
      secondary_link: "https://preppykitchen.com/corn-chowder/",
      meat_id: 6,
      likes: 0,
    },
    {
      id: 15,
      recipe_name: "Chicken Salad",
      contributor_id: 2,
      youtube_link:
        "https://www.youtube.com/watch?v=CHz6FxeF3d8&list=PLCIudlu-vb_ZLHF6d7VQGjBDL5yIKuAvR&index=6",
      secondary_link: "https://preppykitchen.com/chicken-salad-recipe/",
      meat_id: 1,
      likes: 0,
    },
    {
      id: 16,
      recipe_name: "Shrimp Ceviche",
      contributor_id: 2,
      youtube_link:
        "https://www.youtube.com/watch?v=DwBmBsLvBQs&list=PLCIudlu-vb_ZLHF6d7VQGjBDL5yIKuAvR&index=7",
      secondary_link: "https://preppykitchen.com/shrimp-ceviche/",
      meat_id: 3,
      likes: 0,
    },
    {
      id: 17,
      recipe_name: "Shrimp Scampi",
      contributor_id: 2,
      youtube_link:
        "https://www.youtube.com/watch?v=VZFSIs_37UA&list=PLCIudlu-vb_ZLHF6d7VQGjBDL5yIKuAvR&index=8",
      secondary_link: "https://preppykitchen.com/shrimp-scampi/",
      meat_id: 3,
      likes: 0,
    },
  ]);
};
