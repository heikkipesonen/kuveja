import { Model, DataTypes, Association } from 'sequelize'
import { db } from './db'
import { User } from './user'

export class Photo extends Model {
  public id: string
  public name: string  
  public url: string

  public static associations: {
    user: Association<Photo, User>
  }
}

Photo.init({
  id: {
    type: DataTypes.STRING
  },
  name: {
    type: DataTypes.STRING
  },
  url: {
    type: DataTypes.STRING
  }
}, {
  sequelize: db
})