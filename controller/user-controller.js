const knex = require("knex")(require("../knexfile"));

// TODO: a GET function for all recipes of this specific user
const getUserRecipes = async (req, res) => {
  //   console.log(req.params.userId);
  //   res.status(200).json(req.params.userId);
  const userId = req.params.userId;

  try {
    const recipes = await fetchRecipesByUser(userId);
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const fetchRecipesByUser = async (userId) => {
  const recipes = await knex("recipes").where("contributor_id", userId);

  const recipeWithDetails = await Promise.all(
    recipes.map(async (recipe) => {
      const recipeDetails = {
        id: recipe.id,
        recipe_name: recipe.recipe_name,
        youtube_link: recipe.youtube_link,
        secondary_link: recipe.secondary_link,
        likes: recipe.likes,
        meat_id: recipe.meat_id,
        created_at: recipe.created_at,
        updated_at: recipe.updated_at,
      };

      // Fetch associated ingredients
      recipeDetails.ingredients = await knex("recipe_ingredient")
        .join(
          "ingredients",
          "recipe_ingredient.ingredients_id",
          "=",
          "ingredients.id"
        )
        .where("recipe_ingredient.recipes_id", recipeDetails.id)
        .select("ingredients.ingredient_name");

      // Fetch associated procedures
      recipeDetails.procedures = await knex("procedures")
        .where("procedures.recipes_id", recipeDetails.id)
        .select("procedure_steps");

      // Fetch associated origins
      recipeDetails.origins = await knex("recipes_origins")
        .join("origins", "recipes_origins.origins_id", "=", "origins.id")
        .where("recipes_origins.recipes_id", recipeDetails.id)
        .select("origins.origin");

      // Fetch associated meat using direct reference from recipes to meats
      if (recipeDetails.meat_id) {
        const associatedMeat = await knex("meat")
          .where("id", recipeDetails.meat_id)
          .first();
        recipeDetails.meat = associatedMeat ? associatedMeat.meat_name : null;
      }

      return recipeDetails;
    })
  );

  return recipeWithDetails;
};

module.exports = {
  getUserRecipes,
};
