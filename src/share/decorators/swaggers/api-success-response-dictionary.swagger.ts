import { applyDecorators, Type } from '@nestjs/common'
import { ApiOkResponse, getSchemaPath } from '@nestjs/swagger'
import { ApiSuccessResponse } from '../../response'

export const ApiSuccessResponseDictionarySwagger = <TModel extends Type<any>>(model: TModel, isArray = false) => {
  return applyDecorators(
    ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(ApiSuccessResponse) },
          {
            properties: {
              data: {
                type: 'object',
                additionalProperties: isArray
                  ? {
                      type: 'array',
                      items: { $ref: getSchemaPath(model) }
                    }
                  : {
                      $ref: getSchemaPath(model)
                    }
              }
            }
          }
        ]
      }
    })
  )
}
