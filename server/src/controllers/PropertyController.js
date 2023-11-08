import { Property } from "../models/Property.js";

export const getProperty = async ( req, res ) =>{
    try {
        const getProperty = await Property.findAll();
        res.status( 200 ).json({ getProperty });
    } catch (error) {
        console.log( error );
    }
} 

export const getOneProperty = async ( req, res ) =>{
    try {
        const { id } = req.params;
        const getOneProperty = await Property.findOne( { where: { id } } );
        if(!getOneProperty){
            return res.status( 400 ).json({ msg: 'la propiedad no existe' });
        }else{
            res.status( 200 ).json({ getOneProperty });
        }
    } catch (error) {
        console.log( error );
    }
}

export const createProperty = async ( req, res ) =>{
    try {
        const { rooms, country, city, price } = req.body;
        const createProperty = await Property.create({ rooms, country, city, price });
        res.status( 200 ).json({ createProperty });
    } catch (error) {
        console.log( error );
    }
}

export const updateProperty = async ( req, res ) =>{
    try {
        const { id } = req.params;
        const { rooms, country, city, price } = req.body;
        if(!id) return res.status( 400 ).json({ msg: 'Proporcione una propiedad correcta' });
        const updateProperty = await Property.update({ rooms, country, city, price }, { where: { id } });
        if (updateProperty[0] === 0) {
            return res.status(404).json({ error: "No se encontró ninguna propiedad con el ID proporcionado." });
        }
        res.status( 200 ).json({ updateProperty });
    } catch (error) {
        console.log( error );
    }
}
export const deleteProperty = async ( req, res ) =>{
    try {
        const { id } = req.params;
        const deleteProperty = await Property.destroy({ where: { id } });
        if(!deleteProperty){
            return res.status( 400 ).json({ msg: 'Proporcione una propiedad' });
        }else{
            res.status( 200 ).json({ deleteProperty });
        }
    } catch (error) {
        console.log( error );
    }
}