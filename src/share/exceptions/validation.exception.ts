import { HttpException, HttpStatus, ValidationError } from '@nestjs/common'

export class ValidationException extends HttpException {
  constructor(errors: ValidationError[]) {
    super(errors, HttpStatus.UNPROCESSABLE_ENTITY)
  }
}
