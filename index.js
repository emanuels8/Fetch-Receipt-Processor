const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./src/routes/indexRoutes"));
// First route
app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});
// Starting server
app.listen("4000");
