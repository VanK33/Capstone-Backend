const knex = require("knex")(require("../knexfile"));

const getRecipeList = (req, res) => {
  // Step 1: Get distinct recipe IDs
  knex("recipes")
    .distinct("recipes.id")
    .then(async (ids) => {
      let recipes = [];
      for (let idObj of ids) {
        let id = idObj.id;
        // Step 2: For each ID, fetch the associated details.
        let recipe = await fetchRecipeDetails(id);
        recipes.push(recipe);
      }
      res.status(200).send(recipes);
    })
    .catch((error) => {
      res.status(400).send(`Error retrieving recipes: ${error}`);
    });
};

const editRecipeLike = async (req, res) => {
  const recipeId = req.params.recipeId;

  try {
    await knex("recipes").where("id", recipeId).increment("likes", 1);

    const updatedRecipe = await knex("recipes").where("id", recipeId).first();

    res.status(200).json(updatedRecipe);
  } catch (error) {
    console.log("Error incrementing like:", error);
    res.status(400).send(`Error incrementing likes for recipe ${recipeId}`);
  }
};

const fetchRecipeDetails = async (id) => {
  // Fetch the basic recipe data
  let recipe = await knex("recipes").where("id", id).first();

  // Fetch associated ingredients
  recipe.ingredients = await knex("recipe_ingredient")
    .join(
      "ingredients",
      "recipe_ingredient.ingredients_id",
      "=",
      "ingredients.id"
    )
    .where("recipe_ingredient.recipes_id", id)
    .pluck("ingredients.ingredient_name");

  // Fetch associated procedures
  recipe.procedures = await knex("procedures")
    .where("procedures.recipes_id", id)
    .pluck("procedure_steps");

  // Fetch associated origins
  recipe.origins = await knex("recipes_origins")
    .join("origins", "recipes_origins.origins_id", "=", "origins.id")
    .where("recipes_origins.recipes_id", id)
    .pluck("origins.origin");

  // Fetch associated tastes
  recipe.tastes = await knex("recipe_tastes")
    .join("tastes", "recipe_tastes.tastes_id", "=", "tastes.id")
    .where("recipe_tastes.recipes_id", id)
    .pluck("tastes.taste_name");

  // Fetch associated meat using direct reference from recipes to meats
  if (recipe.meat_id) {
    const associatedMeat = await knex("meat")
      .where("id", recipe.meat_id)
      .first();
    recipe.meat = associatedMeat ? associatedMeat.meat_name : null;
  }

  if (recipe.contributor_id) {
    const associatedContributor = await knex("contributors")
      .where("id", recipe.contributor_id)
      .first();
    recipe.contributor = associatedContributor
      ? associatedContributor.contributor_name
      : null;
  }
  return recipe;
};

module.exports = {
  getRecipeList,
  editRecipeLike,
};
