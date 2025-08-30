import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();


const dialect = (process.env.DB_DIALECT || 'postgres') as any;


export const sequelize = new Sequelize(
process.env.DB_NAME || 'rmdb',
process.env.DB_USER || 'mysql',
process.env.DB_PASS || 'password',
{
host: process.env.DB_HOST || 'localhost',
port: Number(process.env.DB_PORT || 3306),
dialect,
logging: false,
}
);


export default sequelize;