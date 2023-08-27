const knex = require("knex")(require("../knexfile"));

// get // TODO: need update for fetch from all tables
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

// add
const addRecipe = async (req, res) => {
  const userId = req.params.userId;
  const recipeData = req.body;

  // some forms of validations

  try {
    await knex.transcation(async (trx) => {
      // find or add meat
      let meatId;
      if (recipeData.meat_name) {
        const meatExists = await trx("meat")
          .where("meat_name", recipeData.meat_name)
          .first();
        if (!meatExists) {
          [meatId] = await trx("meat")
            .insert({ meat_name: recipeData.meat_name })
            .returning("id");
        } else {
          meatId = meatExists.id;
        }
      }

      const [newRecipeId] = await trx("recipes").insert({
        recipe_name: recipeData.recipe_name,
        contributor_id: userId,
        youtube_link: recipeData.youtube_link,
        secondary_link: recipeData.secondary_link,
        meat_id: meatId,
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

      // Handle origins with transaction instance (trx)
      await handleAssociations(
        recipeData.origins,
        "origins",
        "recipe_origins",
        "origin_name",
        "origins_id",
        trx
      );

      // Handle tastes with transaction instance (trx)
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

  const {
    recipe_name,
    youtube_link,
    secondary_link,
    meat_id,
    ingredients,
    origins,
    tastes,
    ...rest
  } = req.body;

  // back-end validation //
  if (
    !req.body.recipe_name ||
    !req.body.youtube_link ||
    !req.body.secondary_link ||
    !req.body.meat_id ||
    !req.body.ingredients ||
    !req.body.origins ||
    !req.body.tastes ||
    !req.body.procedures
  ) {
    return res
      .status(400)
      .send("Please provide all necessary information in the request");
  }

  try {
    const recipeToUpdate = await knex("recipes")
      .where({ id: recipeId, contributor_id: userId })
      .first();

    if (!recipeToUpdate) {
      return res.status(404).json({ error: "Recipe not found" });
    }

    await knex.transaction(async (trx) => {
      // Handle ingredients association
      await handleIngredientsUpdate(trx, recipeId, req.body.ingredients);
      // Handle Origin Association
      await handleOriginsUpdate(trx, recipeId, req.body.origins);
      // Handle Tastes Association
      await handleTastesUpdate(trx, recipeId, req.body.tastes);
      // Handle Procedures Association
      await handleProceduresUpdate(trx, recipeId, req.body.procedures);

      await trx("recipes")
        .where("id", recipeId)
        .update({
          recipe_name,
          youtube_link,
          secondary_link,
          meat_id,
          updated_at: new Date().toISOString(),
          ...rest,
        });
    });

    res.status(200).json({ message: "Recipe updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: `Erro updating recipe ${recipeId}` });
  }
};

// delete  //TODO: need to update to detele from all tables
const deleteRecipe = async (req, res) => {
  const userId = req.params.userId;
  const recipeId = req.params.recipeId;

  try {
    const recipes = await fetchRecipesByUser(userId);
    const recipeToDelete = recipes.find((recipe) => recipe.id === recipeId);

    if (!recipeToDelete) {
      return res.status(404).json({ error: "Recipe not found" });
    }

    await knex.transaction(async (trx) => {
      await trx("procedures").where("recipe_id", recipeId).delete();
      await trx("recipe_tastes").where("recipe_id", recipeId).delete();
      await trx("recipes_origins").where("recipe_id", recipeId).delete();
      await trx("recipe_ingredients").where("recipe_id", recipeId).delete();
      await trx("recipes").where("id", recipeId).delete();
    });

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

const handleIngredientsUpdate = async (trx, recipeId, newIngredients) => {
  const currentIngredients = await trx("recipe_ingredient")
    .where("recipes_id", recipeId)
    .select("ingredients_id");

  const currentIngredientIds = currentIngredients.map(
    (ing) => ing.ingredients_id
  );

  const newIngredientIds = await Promise.all(
    newIngredients.map(async (ingName) => {
      const ingredient = await trx("ingredients")
        .where("ingredient_name", ingName)
        .first();
      if (!ingredient) {
        const [newId] = await trx("ingredients")
          .insert({ ingredient_name: ingName })
          .returning("id");
        return newId;
      }
      return ingredient.id;
    })
  );

  const ingredientsToAdd = newIngredientIds.filter(
    (id) => !currentIngredientIds.includes(id)
  );
  const ingredientsToRemove = currentIngredientIds.filter(
    (id) => !newIngredientIds.includes(id)
  );

  if (ingredientsToAdd.length) {
    await trx("recipe_ingredient").insert(
      ingredientsToAdd.map((ingId) => ({
        recipes_id: recipeId,
        ingredients_id: ingId,
      }))
    );
  }

  if (ingredientsToRemove.length) {
    await trx("recipe_ingredient")
      .where("recipes_id", recipeId)
      .whereIn("ingredients_id", ingredientsToRemove)
      .delete();
  }
};

const handleOriginsUpdate = async (trx, recipeId, newOrigins) => {
  const currentOrigins = await trx("recipe_origins")
    .where("recipes_id", recipeId)
    .select("origins_id");

  const currentOriginIds = currentOrigins.map((org) => org.origins_id);

  const newOriginIds = await Promise.all(
    newOrigins.map(async (orgOrigin) => {
      const origin = await trx("origins").where("origin", orgOrigin).first();
      if (!origin) {
        const [newId] = await trx("origins")
          .insert({ origin: orgOrigin })
          .returning("id");
        return newId;
      }
      return origin.id;
    })
  );

  const originsToAdd = newOriginIds.filter(
    (id) => !currentOriginIds.includes(id)
  );
  const originsToRemove = currentOriginIds.filter(
    (id) => !newOriginIds.includes(id)
  );

  if (originsToAdd.length) {
    await trx("recipe_origins").insert(
      originsToAdd.map((orgId) => ({
        recipes_id: recipeId,
        origins_id: orgId,
      }))
    );
  }

  if (originsToRemove.length) {
    await trx("recipe_origins")
      .where("recipes_id", recipeId)
      .whereIn("origins_id", originsToRemove)
      .delete();
  }
};

const handleTastesUpdate = async (trx, recipeId, newTastes) => {
  const currentTastes = await trx("recipe_tastes")
    .where("recipes_id", recipeId)
    .select("tastes_id");

  const currentTastesIds = currentTastes.map((tas) => tas.tastes_id);

  const newTasteIds = await Promise.all(
    newTastes.map(async (tasTasteName) => {
      const taste = await trx("tastes")
        .where("taste_name", tasTasteName)
        .first();
      if (!taste) {
        const [newId] = await trx("tastes")
          .insert({ taste_name: tasTasteName })
          .returning("id");
        return newId;
      }
      return taste.id;
    })
  );

  const tastesToAdd = newTasteIds.filter(
    (id) => !currentTastesIds.includes(id)
  );
  const tastesToRemove = currentTastesIds.filter(
    (id) => !newTasteIds.includes(id)
  );

  if (tastesToAdd.length) {
    await trx("recipe_tastes").insert(
      tastesToAdd.map((tasId) => ({
        recipes_id: recipeId,
        tastes_id: tasId,
      }))
    );
  }

  if (tastesToRemove.length) {
    await trx("recipe_tastes")
      .where("recipes_id", recipeId)
      .whereIn("tastes_id", tastesToRemove)
      .delete();
  }
};

const handleProceduresUpdate = async (trx, recipeId, newProcedures) => {
  await trx("procedures").where("recipe_id", recipeId).delete();

  const proceduresToInsert = newProcedures.map((procedure) => ({
    procedure_content: procedure.content,
    recipe_id: recipeId,
  }));

  await trx("procedures").insert(proceduresToInsert);
};

module.exports = {
  getUserRecipes,
  addRecipe,
  updateRecipe,
  deleteRecipe,
};
