const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const catalog = require("./routes/catalog");

const port = 3000;

app.use(cors());

app.use("/catalog", catalog);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
