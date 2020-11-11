import { IsArray, IsOptional } from 'class-validator'
import { Transform } from 'class-transformer'
import { transformArrayNumber, validArrayNumber } from '../../../transforms'
import { IsArrayType } from '../../../validators'

export class UserListDto {
  @IsOptional()
  @Transform(transformArrayNumber)
  @IsArrayType(validArrayNumber, 'number')
  @IsArray()
  genders: Array<number>
}
