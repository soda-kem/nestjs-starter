import { UserEntity } from '../../src/entities/User.entity'

import { Request } from 'express'

declare module 'express' {
  export interface Request {
    user: UserEntity
  }
}
