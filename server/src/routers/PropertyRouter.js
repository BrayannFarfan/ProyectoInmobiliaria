import { Router } from "express";
import { createProperty, deleteProperty, getOneProperty, getProperty, updateProperty } from "../controllers/PropertyController.js";
export const PropertyRouter = Router();

PropertyRouter.get("/", getProperty );
PropertyRouter.get('/:id', getOneProperty );
PropertyRouter.post("/", createProperty );
PropertyRouter.put("/:id", updateProperty );
PropertyRouter.delete("/:id", deleteProperty );