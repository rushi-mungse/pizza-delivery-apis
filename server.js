import express from "express";
const app = express();
import router from "./routers";
import { PORT } from "./config";
import dbConnect from "./database";
const port = PORT || 5500;

app.use(express.json());
app.use("/api", router);

dbConnect();

app.listen(port, console.log(`server linstening on port ${port}`));
