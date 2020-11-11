import { ApiPropertyOptions } from '@nestjs/swagger/dist/decorators/api-property.decorator'
import { applyDecorators } from '@nestjs/common'
import { ApiPropertyOptional } from '@nestjs/swagger'
import { getSwaggerEnumDescription, getValueEnum } from '../../utils'

export const ApiPropertyOptionalEnum = (e: Record<string, any>, options: ApiPropertyOptions = {}) => {
  return applyDecorators(
    ApiPropertyOptional({
      enum: getValueEnum(e),
      description: getSwaggerEnumDescription(e),
      ...options
    })
  )
}
