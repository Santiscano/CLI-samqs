import { Router } from "express";

import AuthController from "../controllers/auth.controller";

const route = Router();

// registrarse
route.post( '/signup',  AuthController.signup );
// ingresar
route.post( '/signin', AuthController.signin );
// salir
route.post('/signout');

export default route;
