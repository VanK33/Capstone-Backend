const knex = require("knex")(require("../knexfile"));

// get
const getUserRecipes = async (req, res) => {
  //   console.log(req.params.userId);
  //   res.status(200).json(req.params.userId);
  const userId = req.params.userId;

  try {
    const recipes = await fetchRecipesByUser(userId);
    res.status(200).json(recipes);
  } catch (error) {
    res.status(400).json({ message: `Error accesss user ${userId} recipes` });
  }
};

const addRecipe = async (req, res) => {
  const userId = req.params.userId;
  const recipeData = req.body;

  // some forms of validations

  try {
    await knex.transcation(async (trx) => {
      const [newRecipeId] = await trx("recipes").insert({
        recipe_name: recipeData.recipe_name,
        contributor_id: userId,
        youtube_link: recipeData.youtube_link,
        secondary_link: recipeData.secondary_link,
        likes: 0,
      });

      // Function to handle many-to-many associations
      async function handleAssociations(
        data,
        table,
        assocTable,
        dataColumn,
        assocDataColumn,
        recipeIdColumn = "recipes_id",
        trx
      ) {
        const names = data.map((item) => item.name);
        const existingData = await trx(table)
          .whereIn(dataColumn, names)
          .select();
        const existingNames = existingData.map((item) => item[dataColumn]);

        const newDataNames = names.filter(
          (name) => !existingNames.includes(name)
        );
        const newDataIds = await trx(table)
          .insert(newDataNames.map((name) => ({ [dataColumn]: name })))
          .returning("id");

        const existingAssocs = existingData.map((item) => ({
          [recipeIdColumn]: newRecipeId,
          [assocDataColumn]: item.id,
        }));

        const newAssocs = newDataIds.map((dataId) => ({
          [recipeIdColumn]: newRecipeId,
          [assocDataColumn]: dataId,
        }));

        await trx(assocTable).insert([...existingAssocs, ...newAssocs]);
      }

      // Handle ingredients with transaction instance (trx)
      await handleAssociations(
        recipeData.ingredients,
        "ingredients",
        "recipe_ingredient",
        "ingredient_name",
        "ingredients_id",
        trx
      );

      // Handle origins
      await handleAssociations(
        recipeData.origins,
        "origins",
        "recipe_origins",
        "origin_name",
        "origins_id",
        trx
      );

      // Handle tastes
      await handleAssociations(
        recipeData.tastes,
        "tastes",
        "recipes_tastes",
        "taste_name",
        "tastes_id",
        trx
      );

      // Handle procedures (many-to-one association with recipe)
      if (recipeData.procedures && recipeData.procedures.length) {
        const proceduresToInsert = recipeData.procedures.map((proc) => ({
          description: proc,
          recipe_id: newRecipeId,
        }));
        await knex("procedures").insert(proceduresToInsert);
      }
      return;
    });

    res.status(201).json({ message: "recipe uploaded successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: `Error uploading recipe` });
  }
};

// update
const updateRecipe = async (req, res) => {
  const userId = req.params.userId;
  const recipeId = req.params.recipeId;

  // back-end validation //
  if (
    !req.body.recipe_name ||
    !req.body.youtube_link ||
    !req.body.secondary_link ||
    !req.body.meat_id
    // !req.body.procedures_id
    // ask how to check other reference data errors
  ) {
    return res
      .status(400)
      .send("Please provide all information for the warehouse in the request");
  }

  try {
    const recipes = await fetchRecipesByUser(userId);
    const recipeToUpdate = recipes.find((recipe) => recipe.id === recipeId);

    if (!recipeToUpdate) {
      return res.status(404).json({ error: "Recipe not found" });
    }

    await knex("recipes").where("id", recipeId).update(req.body);

    res.status(200).json({ message: "Recipe updated successfully" });
  } catch (error) {
    res.status(400).json({ message: `Erro updating recipe ${recipeId}` });
  }
};

// delete
const deleteRecipe = async (req, res) => {
  const userId = req.params.userId;
  const recipeId = req.params.recipeId;

  try {
    const recipes = await fetchRecipesByUser(userId);
    const recipeToUpdate = recipes.find((recipe) => recipe.id === recipeId);

    if (!recipeToUpdate) {
      return res.status(404).json({ error: "Recipe not found" });
    }

    await knex("recipes").where("id", recipeId).del();

    res.status(204).json({ message: "Recipe deleted" });
  } catch (error) {
    res.status(400).json({ message: `Error deleting recipe ${recipeId}` });
  }
};

// functionality
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
  addRecipe,
  updateRecipe,
  deleteRecipe,
};
