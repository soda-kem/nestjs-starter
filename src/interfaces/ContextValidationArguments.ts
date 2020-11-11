import { ValidationArguments } from 'class-validator'
import { UserEntity } from '../entities/User.entity'

export interface ContextValidationArguments extends ValidationArguments {
  object: {
    validationContext: {
      user?: UserEntity
    }
    // eslint-disable-next-line @typescript-eslint/ban-types
  } & Object
}
