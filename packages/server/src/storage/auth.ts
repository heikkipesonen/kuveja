import Axios from "axios"
import * as E from 'fp-ts/lib/Either'
import { pipe } from 'fp-ts/lib/pipeable'

import { apiUrl } from "./constants"
import { extractData } from "./utils"
import { AuthDto } from "./dto"
import { ApiError } from '../errors/api'

export const authorize = (keyId: string, key: string) => {
  const headerStr = Buffer.from(`${keyId}:${key}`).toString('base64')

  return Axios.get(`${apiUrl}/b2_authorize_account`, {
    headers: {
      Authorization: `Basic ${headerStr}`
    }
  })
  .then(extractData)
  .then(x => 
    pipe(
      AuthDto.decode(x),
      E.map(x => x),
      E.getOrElse(() => {
        throw new ApiError('auth failed')
      })
    )    
  )    
  .then(x => x)    
}