import { getGenderName } from '../share/utils'
import { UserEntity } from '../entities/User.entity'
import { UserListResponse, UserULResponse } from '../interfaces/responses/user'
import * as moment from 'moment'

export class UserListTransform {
  static transformUser(user: UserEntity): UserULResponse {
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      gender: user.gender,
      genderName: getGenderName(user.gender),
      address: user.address,
      birthday: user.birthday,
      phone: user.phone,
      avatar: user.avatar,
      createdAt: moment(user.createdAt).toISOString(),
      updatedAt: moment(user.updatedAt).toISOString()
    }
  }

  static transformUsers(users: UserEntity[]): UserListResponse {
    return users.map(UserListTransform.transformUser)
  }
}
