import { ApiPropertyOptions } from '@nestjs/swagger/dist/decorators/api-property.decorator'
import { applyDecorators } from '@nestjs/common'
import { ApiPropertyOptional } from '@nestjs/swagger'
import { MomentFormatEnum } from '../../../enums'

export const ApiPropertyOptionalDateTime = (example = '2020-08-24T10:00:43.133Z', options: ApiPropertyOptions = {}) => {
  return applyDecorators(
    ApiPropertyOptional({
      type: 'string',
      format: 'date-time',
      example,
      description: `Format: ${MomentFormatEnum.ISO}`,
      ...options
    })
  )
}
