import axios from 'axios'
import { authorize } from './auth'
import { AuthData } from './dto'

export class Api {    
  constructor(
    private auth: AuthData
  ) {}

  public static init = async (keyId: string, key: string) => {
    const authData = await authorize(keyId, key)
    return new Api(authData)
  }
}