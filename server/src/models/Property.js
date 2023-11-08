import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';

export const Property =  sequelize.define('property', {
    rooms:{
        type: DataTypes.INTEGER
    },
    country:{
        type: DataTypes.STRING
    },
    city:{
        type: DataTypes.STRING
    },
    price:{
        type: DataTypes.FLOAT
    }
},{
    timestamps: false
})