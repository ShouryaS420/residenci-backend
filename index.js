require("dotenv").config();
const express = require("express");
var cors = require("cors");
const app = express();
const connectToMongo = require("./db");
const bodyParser = require("body-parser");

connectToMongo();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use("/api/projects", require("./routes/projects"));
app.use("/api/user", require("./routes/auth"));
app.use("/api/visit", require("./routes/siteVisit"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});