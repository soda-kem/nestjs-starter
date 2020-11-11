import { applyDecorators } from '@nestjs/common'
import { ApiOkResponse, getSchemaPath } from '@nestjs/swagger'
import { ApiSuccessResponse } from '../../response'

export const ApiSuccessResponseStringSwagger = (isArray = false) => {
  return applyDecorators(
    ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(ApiSuccessResponse) },
          {
            properties: {
              data: isArray
                ? {
                    type: 'array',
                    items: { type: 'string' }
                  }
                : {
                    type: 'string'
                  }
            }
          }
        ]
      }
    })
  )
}
