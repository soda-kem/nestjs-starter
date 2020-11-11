import { HttpException, HttpStatus } from '@nestjs/common'

export class NotFoundEntityException extends HttpException {
  constructor(response: string | Record<string, any> = 'Not Found') {
    super(response, HttpStatus.NOT_FOUND)
  }
}
