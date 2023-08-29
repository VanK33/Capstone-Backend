const userRoute = require("express").Router();
const userController = require("../controller/user-controller");
const verifyToken = require("../middleware/auth-middleware");

userRoute
  .route("/:userId")
  .get(userController.getUserRecipes)
  .post(userController.addRecipe);

// TODO: a POST function for add a new post for this specific user
userRoute
  .route("/:userId/:recipeId")
  .put(userController.updateRecipe)
  .delete(userController.deleteRecipe);

module.exports = userRoute;
