const { sequelize } = require("./models");
const bodyParser = require("body-parser");
const express = require("express");
const dotenv = require("dotenv").config();
const routes = require("./routes/routes");
// const cors = require("cors");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(cors({ origin: 'http://127.0.0.1:5173'}))
const port = process.env.PORT || 5000;

app.use("/api", routes); 

app.listen(port, async () => {
  console.log(`Server running on http://localhost:${port}`);

  await sequelize.sync();
  console.log("Database Connected");
});
