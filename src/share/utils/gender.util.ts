import { GenderEnum, GenderNameEnum } from '../../enums'

export const getGenderName = (gender: GenderEnum | null): GenderNameEnum | null => {
  switch (gender) {
    case GenderEnum.MALE:
      return GenderNameEnum.MALE
    case GenderEnum.FEMALE:
      return GenderNameEnum.FEMALE
    case GenderEnum.OTHER:
      return GenderNameEnum.OTHER
    default:
      return null
  }
}
