import { Sequelize } from 'sequelize'; 
import dotenv from 'dotenv';
dotenv.config();

export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

try {
    sequelize.authenticate();
    console.log('se conectó a la base de datos');
} catch (error) {
    console.log(error);
}