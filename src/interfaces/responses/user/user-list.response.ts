import { GenderEnum, GenderNameEnum } from '../../../enums'

export interface UserULResponse {
  id: number
  email: string
  name: string
  gender: GenderEnum | null
  genderName: GenderNameEnum | null
  address: string
  birthday: string
  phone: string
  avatar: string
  createdAt: string
  updatedAt: string
}

export type UserListResponse = UserULResponse[]
