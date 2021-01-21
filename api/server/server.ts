import express from "express";
// Create a new express app instance
const app: express.Application = express();
app.get("/", function (req, res) {
  res.send("Hello World!");
});
app.listen(process.env.PORT || 3001, function () {
  console.log("App is listening on port 3001");
});
