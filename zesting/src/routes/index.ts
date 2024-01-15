import { Router } from "express";

import ApiKeys from "../middlewares/apiKey";
import ValidateToken from "../middlewares/token";

import authRoutes from './auth.routes';
import exampleRoutes from './example.routes';

const route = Router();

const api = new ApiKeys();

// list routes 
route.use( "/auth", api.validateApikey,  authRoutes );
route.use( "/example", api.validateApikey, ValidateToken.auth, exampleRoutes );

export default route;
