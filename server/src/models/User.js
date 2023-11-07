import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';


export const User =  sequelize.define(' user', {
    FullName:{
        type: DataTypes.STRING
    },
    UseName:{
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
    }
},{
    timestamps: false
})
