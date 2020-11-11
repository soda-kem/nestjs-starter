import { applyDecorators, Type } from '@nestjs/common'
import { ApiPropertyOptions } from '@nestjs/swagger/dist/decorators/api-property.decorator'
import { ApiProperty } from '@nestjs/swagger'

export const ApiPropertyArray = (
  // eslint-disable-next-line @typescript-eslint/ban-types
  type: Type<unknown> | Function | [Function] | string | Record<string, any>,
  options: ApiPropertyOptions = {}
) => {
  return applyDecorators(
    ApiProperty({
      isArray: true,
      type,
      ...options
    })
  )
}
