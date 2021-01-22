import morgan from "morgan";
import express from "express";
import ownerRouter from "./owner";
import petRoute from "./petRoute";

const app = express.Router();
app.use(express.json()); // Body Parser
app.use(morgan("dev"));

app.use ('/user', ownerRouter);
app.use ('/pet', petRoute);

export default app;
