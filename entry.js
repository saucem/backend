import fs from "fs";
import express from "express";

const app = express();
const PORT = 5000;

//Routes
app.get("/", (req, res) => {
  res.status(200);
  res.send("Hola mundo! Estamos corriendo un servidor Express");
});

app.get("/nosotros", (req, res) => {
  res.status(200);
  res.send("Página de Bienvenida");
});

app.get("/404", (req, res) => {
  res.status(404);
  res.send("Recurso no encontrado");
});

//Listener
app.listen(PORT, () => {
  console.log(`Servidor corriendo sobre el puero ${PORT}`);
});