const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/mongodb")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log("Could not connect to MongoDB...", err));
