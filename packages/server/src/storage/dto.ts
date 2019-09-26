import t from 'io-ts'

export const AuthDto = t.type({
  accountId: t.string,
  authorizationToken: t.string,
  apiUrl: t.string,
  downloadUrl: t.string,
})
export type AuthData = t.TypeOf<typeof AuthDto>

