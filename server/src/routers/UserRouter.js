import { Router } from "express";
import { UserCreated } from "../controllers/UserController.js";
export const UserRouter = Router();

UserRouter.post('/register', UserCreated)
