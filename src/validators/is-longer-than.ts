import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator'

export const IsLongerThan = (property: string, validationOptions?: ValidationOptions) => {
  return (object: Record<string, any>, propertyName: string): void => {
    registerDecorator({
      name: 'isLongerThan',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints
          const relatedValue = (args.object as any)[relatedPropertyName]
          return typeof value === 'string' && typeof relatedValue === 'string' && value.length > relatedValue.length
        }
      }
    })
  }
}
