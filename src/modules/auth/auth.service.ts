import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { UserEntity } from '../../entities/User.entity'
import { Repository } from 'typeorm'
import { NotFoundEntityException } from '../../share/exceptions'

@Injectable()
export class AuthService {
  constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) {}

  async getUser(id: number): Promise<UserEntity> {
    const user = await this.userRepository
      .createQueryBuilder()
      .andWhere('id = :id', { id })
      .getOne()
    if (!user) throw new NotFoundEntityException()
    return user
  }
}
