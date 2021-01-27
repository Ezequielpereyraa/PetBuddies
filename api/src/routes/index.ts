import morgan from "morgan";
import express from "express";
import ownerRouter from "./owner";
import walkerRouter from "./walker";
import petRoute from "./petRoute";

const app = express.Router();
app.use(express.json()); // Body Parser
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET, PUT, DELETE, POST, PATCH"); // ESTO PERMITE HACER ESTE TIPO DE PETICIONES
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization  "
  );
  next();
});
app.use("/owners", ownerRouter);
app.use("/walkers", walkerRouter);
app.use("/pets", petRoute);

export default app;
