import express from "express";
import Groomer from '../models/DogGroomer';
import User from '../models/User';

const server = express.Router();

// Trae DogGroomers
server.get("/", async (req, res) => {
  try {
    const groomers = await Groomer.find();
    res.send(groomers);
  } catch (err) {
    res.send(err);
  }
});

// Trae un DogGroomer
server.get("/:id", async (req, res) => {
  try {
    const groomer = await Groomer.findById(req.params.id);
    res.send(groomer);
  } catch (error) {
    res.send(error);
  }
});

// Crear DogGroomer
server.post("/", async (req, res) => {
  try {
    const broomer: any = await Groomer.create(req.body);
    await broomer.save();
    res.send(broomer);
  } catch (error) {
    res.json(error);
  }
});

// Actualizar DogGroomer
server.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const owner = await Groomer.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });

    res.send(owner);
  } catch (err) {
    res.send(err);
  }
});

server.patch('/:userId/favourites/:groomerId', async (req, res) => {
  const { userId, groomerId } = req.params;

  try {
    const usuario = await User.findById (userId);
    const peluqueria = await Groomer.findById (groomerId);
    let confirm: any = usuario?.favouritesGroomers.find((peluqueria: any) => peluqueria._id === groomerId);
    if (!confirm) {
      usuario.favouritesGroomers = [...usuario.favouritesGroomers, peluqueria];
      await usuario.save();
      return res.send(usuario);
    } else {
      res.send({ msg: "Esta pelu ya esta en tus favoritos!" });
    }
  } catch (err) {
    res.send(err);
  }
})

server.delete('/:userId/favourites/:groomerId', async (req, res) => {
  const { userId, groomerId } = req.params;
  try {
    const user = await User.findById(userId);
    user.favouritesGroomers = user.favouritesGroomers.filter((fav: { _id: string }) => String(fav._id) !== groomerId);
    await user.save();
    res.status(200).send(user);
  } catch (err) {
    res.send(err);
  }
})

server.get('/:userId/favourites', async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId).select("favouritesGroomers");
    res.send(user)
  } catch (err) {
    res.status(200).send(err);
  }
})

export default server;
