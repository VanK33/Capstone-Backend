const userRoute = require("express").Router();
const userController = require("../controller/user-controller");
const verifyToken = require("../middleware/auth-middleware");
const validateRecipeInput = require("../middleware/user-middleware");

userRoute
  .route("/:userId")
  .get(userController.getUserRecipes)
  .post(validateRecipeInput, userController.addRecipe);

userRoute
  .route("/:userId/:recipeId")
  .put(validateRecipeInput, userController.updateRecipe)
  .delete(userController.deleteRecipe);

module.exports = userRoute;
