import express from "express";
const app = express();

app.listen(5050, () => {
  console.log("This is an express server, hosting at http://localhost:5050");
});
