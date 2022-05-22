const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { coffeeRoutes } = require("./routes");
const bodyParser = require("body-parser");

// Load .env into process.env
require("dotenv").config();

// Connect to DB
const mongoUser = process.env.MONGO_DB_USER_LOGIN;
const mongoPassword = process.env.MONGO_DB_USER_PASSWORD;
const dbUri = `mongodb+srv://${mongoUser}:${mongoPassword}@brewlydb.h1xg0.mongodb.net/brewlydb?retryWrites=true&w=majority`;
mongoose.connect(dbUri);
mongoose.connection.on("connected", () => {
  console.log("Connected to mongo db");
});

// App

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/coffee", coffeeRoutes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Example app listening on port ${port || 3001} `);
});
