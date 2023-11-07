import { Contact } from '../models/Contact.js';

export const createContact = async ( req, res ) => {
    try {
        const { name, email, subjet, message } = req.body;
        const createContact = await Contact.create({ name, email, subjet, message });
        return res.status( 200 ).json( createContact );
    } catch (error) {
        console.log( error );
    }
}