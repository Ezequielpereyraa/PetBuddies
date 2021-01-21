import express from "express";
import Owner from "../models/User";
const server = express.Router();

server.post("/", async (req, res) => {
  try {
    const owner = await Owner.create(req.body);
    await owner.save();
    res.send(owner);
  } catch (err) {
    res.json(err);
  }
});

/* 
    name: "   juan carlos    ",
    lastname: "    del     valle ",
    email: "javisawasss@gmail.com",
    password: "javier",
    cellphone: 4213213,
    address: "jkashdajshds",
    zona: "norte",
    isAdmin: true,
    dni: 12321321,
    photo: "cualquiercosa",
*/
export default server;
