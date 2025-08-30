import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db';


export class Character extends Model {
    declare id: number;
    declare rmId: number;
    declare name: string;
    declare status: string;
    declare species: string;
    declare type: string;
    declare gender: string;
    declare origin: string;
    declare image: string;
}


Character.init(
{
    rmId: { type: DataTypes.INTEGER, allowNull: false, unique: true },
    name: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.STRING },
    species: { type: DataTypes.STRING },
    type: { type: DataTypes.STRING },
    gender: { type: DataTypes.STRING },
    origin: { type: DataTypes.STRING },
    image: { type: DataTypes.STRING },
},
{ sequelize, tableName: 'characters' }
);


export default Character;