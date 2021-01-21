import morgan from "morgan";
import express from "express";
import ownerRouter from './owner';

const app = express.Router();
app.use(express.json()); // Body Parser
app.use(morgan("dev"));

app.use ('/user', ownerRouter);

export default app;
