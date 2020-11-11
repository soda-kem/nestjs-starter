import { Injectable } from '@nestjs/common'
import { ConfigService, ConfigType } from '@nestjs/config'
import databaseConfig, { DATABASE_CONFIG_NAME } from '../configs/database.config'
import { TypegooseModuleOptions, TypegooseOptionsFactory } from 'nestjs-typegoose'

@Injectable()
export class TypegooseConfigService implements TypegooseOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypegooseOptions(): TypegooseModuleOptions {
    const { mongo } = this.configService.get<ConfigType<typeof databaseConfig>>(DATABASE_CONFIG_NAME)
    return {
      uri: `mongodb://${mongo.host}:${mongo.port}/${mongo.database}`,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      user: mongo.username,
      pass: mongo.password,
      authSource: 'admin'
    }
  }
}
