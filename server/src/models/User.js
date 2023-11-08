import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';


export const User =  sequelize.define(' user', {
    fullName:{
        type: DataTypes.STRING
    },
    useName:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    phone:{
        type: DataTypes.INTEGER
    },
    rol:{
        type: DataTypes.STRING
    }
},{
    timestamps: false
})
