import express from "express";
import connectDb from "./src/config/db";
// Create a new express app instance
import router from "./src/routes/index";
const app: express.Application = express();

//Connect db
connectDb();

app.use("/", router);
app.listen(process.env.PORT || 3001, function () {
  console.log("App is listening on port 3001");
});
