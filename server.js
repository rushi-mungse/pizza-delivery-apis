import express from "express";
const app = express();
import router from "./routers";
import { PORT } from "./config";

app.use(express.json());
app.use("/api", router);

const port = PORT || 5500;

app.listen(port, () => console.log(`server linstening on port ${port}`));
