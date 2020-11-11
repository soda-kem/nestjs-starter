import { applyDecorators, Type } from '@nestjs/common'
import { ApiOkResponse, getSchemaPath, refs } from '@nestjs/swagger'
import { ApiSuccessResponse } from '../../response'

export const ApiSuccessResponseOneOfSwagger = <TModel extends Type<any>>(models: TModel[]) => {
  return applyDecorators(
    ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(ApiSuccessResponse) },
          {
            properties: {
              data: {
                oneOf: refs(...models)
              }
            }
          }
        ]
      }
    })
  )
}
