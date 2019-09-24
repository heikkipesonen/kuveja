interface BaseUser {
  name: string
  email: string
}

export interface Photographer extends BaseUser {

}

export interface Admin extends BaseUser {
  admin: true
}

export type User = Photographer | Admin