import dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();
import router from "./routers";

app.use(express.json());
app.use("/api", router);

const port = process.env.PORT || 5500;

app.listen(port, () => console.log(`server linstening on port ${port}`));
