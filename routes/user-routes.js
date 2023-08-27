const userRoute = require("express").Router();
const userController = require("../controller/user-controller");

userRoute.route("/:userId").get(userController.getUserRecipes);

// TODO: a POST function for add a new post for this specific user

// TODO: a DETLE function for delete unwanted post

// TODO: a PATCH function for edit an existing post from this specific user
userRoute
  .route("/:userId/:recipeId")
  .put(userController.updateRecipe)
  .delete(userController.deleteRecipe);

module.exports = userRoute;
