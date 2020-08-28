const express = require("express");
const app = express();
const apiRouter = require("./routes/apiRouter");
const dbConnection = require("./db/connection");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/cardgameleaderboard/v1", apiRouter);

module.exports = app;
