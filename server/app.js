require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`NOW RUNNING ON PORT ${PORT}`);
});
