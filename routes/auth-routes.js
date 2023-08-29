const authRoute = require("express").Router();
const authController = require("../controller/auth-controller");

authRoute.route("/signup", authController.signUp);
authRoute.route("/login", authController.logIn);
authRoute.route("/profile", authController.getProfile);

module.exports = authRoute;
