const express = require("express");
// const bcrypt = require("bcrypt");
const cors = require("cors");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 5051;

app.use(cors());
app.use(express.json());

// A route to user Auth
const authRoute = require("./routes/auth-routes");
// A route to userManagement
const userRoute = require("./routes/user-routes");
// A route to pageSelection
const publicRoute = require("./routes/public-routes");

app.use("/public", publicRoute);
app.use("/user", userRoute);
app.use("/auth", authRoute);

app.get("", (_req, res) => {
  res.send("Welcome to PickUrDish server");
});

app.listen(PORT, () => {
  console.log(`This is an express server, hosting at http://localhost:${PORT}`);
});
