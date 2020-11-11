import * as env from 'dotenv'
env.config()

const config = {
  port: +(process.env.PORT || 3000),
  typeorm: {
    connection: process.env.TYPEORM_CONNECTION || 'mysql',
    host: process.env.TYPEORM_HOST,
    port: +(process.env.TYPEORM_PORT || 3306),
    username: process.env.TYPEORM_USERNAME || 'root',
    password: process.env.TYPEORM_PASSWORD || '',
    database: process.env.TYPEORM_DATABASE,
    migrationsRun: process.env.TYPEORM_MIGRATIONS_RUN === 'true',
    synchronize: process.env.TYPEORM_SYNCHRONIZE === 'true',
    logging: process.env.TYPEORM_LOGGING === 'true'
  },
  mongo: {
    host: process.env.MONGO_HOST,
    port: +(process.env.MONGO_PORT || 27017),
    username: process.env.MONGO_USERNAME || 'root',
    password: process.env.MONGO_PASSWORD || '',
    database: process.env.MONGO_DATABASE,
    debug: process.env.MONGO_DEBUG
  }
}

export default config
