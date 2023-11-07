import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';


export const Contact =  sequelize.define(' contact', {
    name:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    subjet:{
        type: DataTypes.STRING
    },
    message:{
        type: DataTypes.STRING
    }
},{
    timestamps: false
})
