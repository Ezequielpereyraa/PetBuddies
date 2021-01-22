import express from "express";
import User from "../models/User";
const server = express.Router();

server.get('/', async(req,res)=>{
  try{
    const owners = await User.find({role:'Owner'})
    res.send(owners)
  }catch(err){
    res.send(err)
  }
})

server.post("/", async (req, res) => {
  try {
    const owner = await User.create(req.body); //pasan los del registro (Name, lastName, password, email, zona)
    await owner.save();
    res.send(owner);
  } catch (err) {
    res.json(err);
  }
});

server.put('/:id', async(req,res)=>{
  const {id}=req.params;
 
  try{
    const owner = await User.findByIdAndUpdate(
      {_id: id}, req.body,{new:true})
    res.send(owner)
  }catch(err){
    res.send(err)
  }
})

    // name: "   juan carlos    ",
    // lastname: "    del     valle ",
    // email: "javisawasss@gmail.com",
    // password: "javier",
    // cellphone: 4213213,
    // address: "jkashdajshds",
    // zona: "norte",
    // isAdmin: true,
    // dni: 12321321,
    // photo: "cualquiercosa",

export default server;
