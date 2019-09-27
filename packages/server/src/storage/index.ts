import axios from 'axios'
import { authorize } from './auth'
import { AuthData } from './dto'

export class Api {    
  constructor(
    private auth: Promise<AuthData>
  ) {}

  public static init = async (keyId: string, key: string) => 
    new Api(authorize(keyId, key))  
}