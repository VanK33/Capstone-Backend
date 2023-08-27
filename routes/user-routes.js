const userRoute = require("express").Router();
const userController = require("../controller/user-controller");

// TODO: a GET function for all posts of this specific user
userRoute.route("/:userId").get(userController.getUserRecipes);
// TODO: a PATCH function for edit an existing post from this specific user

// TODO: a POST function for add a new post for this specific user

// TODO: a DETLE function for delete unwanted post

module.exports = userRoute;
