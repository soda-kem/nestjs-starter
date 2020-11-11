import { ApiPropertyOptions } from '@nestjs/swagger/dist/decorators/api-property.decorator'
import { applyDecorators } from '@nestjs/common'
import { ApiPropertyOptional } from '@nestjs/swagger'
import { getSwaggerEnumArrayDescription, getValueEnumArray } from '../../utils'

export const ApiPropertyOptionalEnumArray = (es: Record<string, any>[], options: ApiPropertyOptions = {}) => {
  return applyDecorators(
    ApiPropertyOptional({
      enum: getValueEnumArray(es),
      description: getSwaggerEnumArrayDescription(es),
      ...options
    })
  )
}
