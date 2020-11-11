import { applyDecorators, Type } from '@nestjs/common'
import { ApiPropertyOptions } from '@nestjs/swagger/dist/decorators/api-property.decorator'
import { ApiPropertyOptional } from '@nestjs/swagger'

export const ApiPropertyOptionalArray = (
  // eslint-disable-next-line @typescript-eslint/ban-types
  type: Type<unknown> | Function | [Function] | string | Record<string, any>,
  options: ApiPropertyOptions = {}
) => {
  return applyDecorators(
    ApiPropertyOptional({
      isArray: true,
      type,
      ...options
    })
  )
}
