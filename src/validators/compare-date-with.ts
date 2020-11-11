import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator'
import { MomentFormatEnum } from '../enums'
import * as moment from 'moment'
import { MomentFormatSpecification } from 'moment'

export const CompareDateWith = (
  property: string,
  compare: 'isAfter' | 'isSameOrAfter' | 'isBefore' | 'isSameOrBefore',
  format: MomentFormatEnum | MomentFormatSpecification,
  validationOptions?: ValidationOptions
) => {
  return (object: Record<string, any>, propertyName: string): void => {
    registerDecorator({
      name: 'compareDateWith',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints
          const relatedValue = (args.object as any)[relatedPropertyName]
          return (
            typeof value === 'string' &&
            typeof relatedValue === 'string' &&
            moment(value, format, true)[compare](moment(relatedValue, format, true))
          )
        },
        defaultMessage(args?: ValidationArguments): string {
          switch (compare) {
            case 'isAfter':
              return `(${args.property}) should be after (${property})`
            case 'isBefore':
              return `(${args.property}) should be before (${property})`
            case 'isSameOrAfter':
              return `(${args.property}) should be same or after (${property})`
            case 'isSameOrBefore':
              return `(${args.property}) should be same or before (${property})`
          }
        }
      }
    })
  }
}
