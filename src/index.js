const express = require("express");
const healthRoutes = require("./routes/healthRoutes");
const matrixRoutes = require("./routes/matrixRoutes");

require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use("/health", healthRoutes);
app.use("/matrix", matrixRoutes);

app.listen(port, () => {
  console.log(`Matrix app listening on port ${port}`);
});
