import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthModule } from '../auth/auth.module'
import { IsExistUserIdValidator } from '../../validators'
import { UserController } from './user.controller'
import { UserEntity } from '../../entities/User.entity'

@Module({
  controllers: [UserController],
  providers: [UserService, IsExistUserIdValidator],
  imports: [TypeOrmModule.forFeature([UserEntity]), AuthModule]
})
export class UserModule {}
