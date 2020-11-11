import { registerAs } from '@nestjs/config'
import config from './configuration'

const { typeorm, mongo } = config

export const DATABASE_CONFIG_NAME = 'database'

export default registerAs(DATABASE_CONFIG_NAME, () => ({
  typeorm,
  mongo
}))
