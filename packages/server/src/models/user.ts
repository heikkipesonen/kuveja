import { Model, DataTypes } from 'sequelize'
import { db } from './db'

export class User extends Model {
  public id: string
  public name: string
  public email: string
}

User.init({
  id: {
    type: DataTypes.STRING
  },
  name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  }
}, {
  sequelize: db
})