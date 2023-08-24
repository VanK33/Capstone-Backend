const publicRoute = require("express").Router();
const publicController = require("../controller/public-controller");

publicRoute.route("/").get(publicController.getRecipeList);

module.exports = publicRoute;
