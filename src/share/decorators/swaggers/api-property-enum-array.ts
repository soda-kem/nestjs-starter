import { ApiPropertyOptions } from '@nestjs/swagger/dist/decorators/api-property.decorator'
import { applyDecorators } from '@nestjs/common'
import { ApiProperty } from '@nestjs/swagger'
import { getSwaggerEnumArrayDescription, getValueEnumArray } from '../../utils'

export const ApiPropertyEnumArray = (es: Record<string, any>[], options: ApiPropertyOptions = {}) => {
  return applyDecorators(
    ApiProperty({
      enum: getValueEnumArray(es),
      description: getSwaggerEnumArrayDescription(es),
      ...options
    })
  )
}
