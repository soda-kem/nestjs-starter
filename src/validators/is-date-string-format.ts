import { registerDecorator, ValidationArguments, ValidationOptions } from 'class-validator'
import * as moment from 'moment'
import { MomentFormatSpecification } from 'moment'
import { MomentFormatEnum } from '../enums'

export const IsDateStringFormat = (
  format: MomentFormatEnum | MomentFormatSpecification,
  formatName?: string,
  validationOptions?: ValidationOptions
) => {
  return (object: Record<string, any>, propertyName: string): void => {
    registerDecorator({
      name: 'isDateStringFormat',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: string) {
          if (value) {
            return moment(value, format, true).isValid()
          }
          return true
        },
        defaultMessage(args?: ValidationArguments): string {
          return `(${args.value}) is not a valid ${formatName ? `(${formatName}) ` : ''}format`
        }
      }
    })
  }
}
