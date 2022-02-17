import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../config'

interface UserAttributes {
    id: number;
    userId: number;
    phoneNumber: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface UserInput extends Optional<UserAttributes, 'id' | 'userId' | 'phoneNumber'> {}

export interface UserOutput extends Required<UserAttributes> {}

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
    public id: number
    public userId!: number
    public phoneNumber!: string
    
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

User.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: 'column'
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
  sequelize: sequelizeConnection,
  paranoid: true
})

export default User