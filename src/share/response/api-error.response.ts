import { ApiProperty } from '@nestjs/swagger'

export class ApiErrorResponse {
  @ApiProperty()
  errors?: []

  @ApiProperty()
  message = 'Internal Server Error'

  @ApiProperty()
  success: number

  static create(message: string, errors?: []): ApiErrorResponse {
    const apiErrorResponse = new ApiErrorResponse()
    apiErrorResponse.success = 0
    apiErrorResponse.message = message
    if (errors) apiErrorResponse.errors = errors
    return apiErrorResponse
  }
}
