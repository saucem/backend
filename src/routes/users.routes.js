import { Router } from "express"; //No justifica importar el objeto express completo, sólo vamos a utilizar las rutas en éste módulo
import usersControllers from "../controllers/users.controllers.js";
const router = Router();

//GET
router.get('/', usersControllers.getAllUsers);

//POST
router.post('/', usersControllers.createUser);


export default router;