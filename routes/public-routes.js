const publicRoute = require("express").Router();
const publicController = require("../controller/public-controller");

publicRoute.route("/").get(publicController.getRecipeList);

publicRoute.route("/:recipeId").post(publicController.editRecipeLike);

module.exports = publicRoute;
