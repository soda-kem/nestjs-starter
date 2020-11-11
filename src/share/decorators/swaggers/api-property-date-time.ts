import { ApiPropertyOptions } from '@nestjs/swagger/dist/decorators/api-property.decorator'
import { applyDecorators } from '@nestjs/common'
import { ApiProperty } from '@nestjs/swagger'
import { MomentFormatEnum } from '../../../enums'

export const ApiPropertyDateTime = (example = '2020-08-24T10:00:43.133Z', options: ApiPropertyOptions = {}) => {
  return applyDecorators(
    ApiProperty({
      type: 'string',
      format: 'date-time',
      example,
      description: `Format: ${MomentFormatEnum.ISO}`,
      ...options
    })
  )
}
