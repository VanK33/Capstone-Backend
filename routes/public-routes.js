const publicRoute = require("express").Router();
const publicController = require("../controller/public-controller");

// TODO for future2: Add displaying comments for get
publicRoute.route("/").get(publicController.getRecipeList);

publicRoute.route("/:recipeId").post(publicController.editRecipeLike);

// TODO for future0: Add migrations table for comments, with many-to-one assoication to recipe, also contains like, date created.
// TODO for future1: Add comments. if login, then user information is the current auth, else just anonymous
module.exports = publicRoute;
