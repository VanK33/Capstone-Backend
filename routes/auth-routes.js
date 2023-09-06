const authRoute = require("express").Router();
const authController = require("../controller/auth-controller");

authRoute.route("/signup").post(authController.signUp);
authRoute.route("/login").post(authController.logIn);
authRoute.route("/profile").get(authController.getProfile);

module.exports = authRoute;
