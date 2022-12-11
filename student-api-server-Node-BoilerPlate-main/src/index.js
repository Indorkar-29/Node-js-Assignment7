const express = require("express");
const app = express();
// const bodyParser = require("body-parser");
const port = 8080;
const mongoose = require("mongoose");
const studentRouter = require("../routes/student");
// app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
// your code goes here

async function main() {
  await mongoose.connect("mongoose://localhost/SchoolDB");
  console.log("Successfully connected to DataBase");
  app.use("/api", studentRouter);
  app.listen(port, () => console.log(`App listening on port ${port}!`));
}

main();
// module.exports = app;
