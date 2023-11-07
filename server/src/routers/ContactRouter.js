import { Router } from 'express';
import { createContact } from '../controllers/ContactController.js'
export const ContactRouter = Router();

ContactRouter.post('/', createContact);