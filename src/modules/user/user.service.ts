import { Injectable } from '@nestjs/common'
import { UserEntity } from '../../entities/User.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UserListDto } from './dtos/user-list.dto'
import { UserListResponse } from '../../interfaces/responses/user/user-list.response'
import { UserListTransform } from '../../transforms'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>
  ) {}

  async getUsers(queries: UserListDto): Promise<UserListResponse> {
    const users = await this.userRepository
      .createQueryBuilder()
      .andWhere('gender IN(:...genders)', { genders: queries.genders })
      .getMany()
    return UserListTransform.transformUsers(users)
  }

  async favorite(id: number, userId: number): Promise<boolean> {
    console.log(id, userId)
    return true
  }
}
