const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();

const router = require("./routers");
app.use("/api", router);

const port = process.env.PORT || 5500;

app.listen(port, () => console.log(`server linstening on port ${port}`));
