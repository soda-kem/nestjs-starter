import * as Joi from '@hapi/joi'

export default Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'local', 'test')
    .default('local'),
  PORT: Joi.number().default(4000),
  TYPEORM_CONNECTION: Joi.string().default('mysql'),
  TYPEORM_HOST: Joi.string().default('localhost'),
  TYPEORM_PORT: Joi.number().default(3306),
  TYPEORM_USERNAME: Joi.string().default('root'),
  TYPEORM_PASSWORD: Joi.string().default(''),
  TYPEORM_DATABASE: Joi.string().required(),
  TYPEORM_MIGRATIONS_RUN: Joi.boolean().default(false),
  TYPEORM_SYNCHRONIZE: Joi.boolean().default(false),
  TYPEORM_LOGGING: Joi.boolean().default(false),
  MONGO_HOST: Joi.string().default('localhost'),
  MONGO_PORT: Joi.number().default(27017),
  MONGO_USERNAME: Joi.string().default('root'),
  MONGO_PASSWORD: Joi.string().default(''),
  MONGO_DATABASE: Joi.string().required(),
  MONGO_DEBUG: Joi.boolean().default(false)
})
