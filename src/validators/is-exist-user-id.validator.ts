import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
  registerDecorator,
  ValidationOptions
} from 'class-validator'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Injectable } from '@nestjs/common'
import { UserEntity } from '../entities/User.entity'

@ValidatorConstraint({ name: 'isExistUserId', async: true })
@Injectable()
export class IsExistUserIdValidator implements ValidatorConstraintInterface {
  constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) {}

  async validate(id: number): Promise<boolean> {
    const user = await this.userRepository
      .createQueryBuilder()
      .andWhere('id = :id', { id })
      .getOne()
    return !!user
  }

  defaultMessage(args: ValidationArguments): string {
    return `The user with id ${args.value} is not exists!`
  }
}

export const IsExistUserId = (validationOptions?: ValidationOptions) => {
  return (object: Record<string, any>, propertyName: string): void => {
    registerDecorator({
      name: 'isExistUserId',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: IsExistUserIdValidator
    })
  }
}
