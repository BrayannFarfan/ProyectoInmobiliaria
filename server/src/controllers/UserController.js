import { User } from '../models/User.js';
import md5 from 'md5';


export const UserCreated = async ( req, res ) => {
    try {
        const { fullName, useName, email, password, phone, rol } = req.body;
        const newPass = md5(password);
       if( fullName == "" || useName == "" || email == "" || password == "" || phone == "" || rol == "" ){
           return res.status(400).json({msg: 'todos los campos son obligatorios'})
       }

       const userExist = await User.findOne({where: {email}});
       if( userExist ){
           return res.status( 400 ).json({ msg: 'el usuario ya existe' })
       }else{
            const UserCreated = await User.create({ fullName, useName, password: newPass, email, phone, rol });
            return res.status(200).json( UserCreated )
       }
    } catch ( error ) {
        console.log( error );
    }
}
