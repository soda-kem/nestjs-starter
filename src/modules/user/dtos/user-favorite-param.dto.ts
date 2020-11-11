import { IsNotEmpty, IsNumber } from 'class-validator'
import { Type } from 'class-transformer'
import { IsExistUserId } from '../../../validators'

export class UserFavoriteParamDto {
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  @IsExistUserId()
  id: number
}
