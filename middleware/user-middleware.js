const jwt = require("jsonwebtoken");

function validateRecipeInput(req, res, next) {
  const {
    recipe_name,
    youtube_link,
    secondary_link,
    meat_name,
    ingredients,
    procedures,
    origins,
    meat,
    contributor,
    tastes,
  } = req.body;

  if (
    !recipe_name ||
    !youtube_link ||
    !ingredients ||
    !procedures ||
    !origins ||
    !meat ||
    !contributor ||
    !tastes
  ) {
    return res.status(400).send("Missing required fields");
  }

  if (
    !Array.isArray(ingredients) ||
    !Array.isArray(procedures) ||
    !Array.isArray(origins) ||
    !Array.isArray(tastes)
  ) {
    return res
      .status(400)
      .send("Ingredients, procedures, origins, and tastes should be arrays");
  }

  if (
    !ingredients.length ||
    !procedures.length ||
    !origins.length ||
    !tastes.length
  ) {
    return res.status(400).send("Array fields should not be empty");
  }

  if (
    !ingredients.every((item) => typeof item === "string" && item) ||
    !procedures.every((item) => typeof item === "string" && item) ||
    !origins.every((item) => typeof item === "string" && item) ||
    !tastes.every((item) => typeof item === "string" && item)
  ) {
    return res.status(400).send("Array elements should be non-empty strings");
  }

  next();
}

module.exports = validateRecipeInput;
