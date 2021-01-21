import morgan from "morgan";
import express from "express";
import Owner from "../models/Owner";

const app = express.Router();
app.use(express.json()); // Body Parser
app.use(morgan("dev"));

export default app;
