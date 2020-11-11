import { ApiPropertyOptions } from '@nestjs/swagger/dist/decorators/api-property.decorator'
import { applyDecorators } from '@nestjs/common'
import { ApiProperty } from '@nestjs/swagger'
import { getSwaggerEnumDescription, getValueEnum } from '../../utils'

export const ApiPropertyEnum = (e: Record<string, any>, options: ApiPropertyOptions = {}) => {
  return applyDecorators(
    ApiProperty({
      enum: getValueEnum(e),
      description: getSwaggerEnumDescription(e),
      ...options
    })
  )
}
