import md5 from "md5";
import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';


export const AuthLogin = async ( req, res ) =>{
    try {
        const { email, password } = req.body
        if( email == "" && password == "" ) return res.status( 400 ).json( { msg: 'todos los campos son obligatorios' } );
        const AuthLogin = await User.findOne({ where:{ email }});

            if(!AuthLogin) return res.status( 401 ).json({ mgs: 'el usuario no existe' });

            const comparePass = md5( password ); 

            if( comparePass !== AuthLogin.password )return res.status( 402 ).json({ message:'Las credenciales son incorrectas' });

            const token = jwt.sign({user: AuthLogin.id}, 'secreto', {expiresIn: '24h'});
            return res.status(200).json({ data: AuthLogin, token: token });

    }catch ( error ) {
            return res.status( 500 ).json({ error: error.message });
    }
}