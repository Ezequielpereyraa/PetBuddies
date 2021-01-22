import express from "express";
import User from "../models/User";
import Pet from "../models/Pet";
const server = express.Router();

// Trae solo USER's
server.get('/', async(req,res)=>{
  try{
    const owners = await User.find({role:'Owner'})
    res.send(owners)
  }catch(err){
    res.send(err)
  }
})

// Trae tanto al USER como a sus respectivas PET's
server.get("/:id", async(req,res) => {
  try {
    const owner = await User.findById(req.params.id);
    const pets = await Pet.find({ownerId:req.params.id});
    res.send({owner,pets})
  } catch (error) {
    res.send(error)
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
