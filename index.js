import express from "express";
import cors from "cors";
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 5051;

app.use(cors());
app.use(express.json());

// A route to user Auth
// A route to userManagement
// A route to pageSelection

app.get("", (_req, res) => {
  res.send("Welcome to PickUrDish server");
});

app.listen(PORT, () => {
  console.log("This is an express server, hosting at http://localhost:5050");
});
