import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { AuthService } from '../auth.service'
import { UserEntity } from '../../../entities/User.entity'
import { Request } from 'express'
import { AuthException } from '../../../share/exceptions'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>()

    let user: UserEntity
    try {
      user = await this.authService.getUser(1)
    } catch (e) {
      throw new AuthException()
    }

    request.user = user
    return true
  }
}
