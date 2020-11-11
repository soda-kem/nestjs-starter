import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { UserService } from './user.service'
import { AuthGuard } from '../auth/guards/auth.guard'
import { UserFavoriteParamDto } from './dtos/user-favorite-param.dto'
import { User } from '../auth/decorators/user.decorator'
import { UserEntity } from '../../entities/User.entity'
import { ApiSuccessResponse } from '../../share/response'
import { UserListDto } from './dtos/user-list.dto'
import { UserListResponse } from '../../interfaces/responses/user/user-list.response'

@ApiTags('users')
@UseGuards(AuthGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/')
  async index(@Query() queries: UserListDto): Promise<ApiSuccessResponse<UserListResponse>> {
    return ApiSuccessResponse.create(await this.userService.getUsers(queries))
  }

  @Get(':id/favorite')
  async favorite(
    @Param() { id }: UserFavoriteParamDto,
    @User() user: UserEntity
  ): Promise<ApiSuccessResponse<{ favorite: boolean }>> {
    const favorite = await this.userService.favorite(id, user.id)
    return ApiSuccessResponse.create({ favorite: favorite })
  }
}
