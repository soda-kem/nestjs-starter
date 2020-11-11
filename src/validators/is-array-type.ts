import { registerDecorator, ValidationArguments, ValidationOptions } from 'class-validator'

type CallbackFunction = (values: Array<any>) => boolean

export const IsArrayType = (
  typeFunction: CallbackFunction,
  typeName: string,
  validationOptions?: ValidationOptions
) => {
  return (object: Record<string, any>, propertyName: string): void => {
    registerDecorator({
      name: 'isArrayType',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(values) {
          return typeFunction(values)
        },
        defaultMessage(validationArguments?: ValidationArguments): string {
          return `${validationArguments.property} must be an array of ${typeName}`
        }
      }
    })
  }
}
