import express from "express";
import usersRoutes from "./src/routes/users.routes.js";

const app = express();
const PORT = 5000;

app.use(express.json());

//Routes
app.use("/api/users", usersRoutes); //"Uso" todas las rutas que esten creadas en users.routes.js

//Listener
app.listen(PORT, () => {
  console.log(`Servidor corriendo sobre el puerto ${PORT}`);
});