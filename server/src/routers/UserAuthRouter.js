import { Router } from "express";
import { AuthLogin } from '../controllers/UserAuthController.js';
export const UserAuthRouter = Router();

UserAuthRouter.post("/", AuthLogin);