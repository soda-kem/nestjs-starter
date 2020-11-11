import { HttpException, HttpStatus } from '@nestjs/common'

export class AuthException extends HttpException {
  constructor(response = 'Authentication failed') {
    super(response, HttpStatus.UNAUTHORIZED)
  }
}
