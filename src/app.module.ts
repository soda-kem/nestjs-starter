import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import databaseConfig from './configs/database.config'
import appConfig from './configs/app.config'
import validationSchema from './configs/validation-schema'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TypeOrmConfigService, TypegooseConfigService } from './databases'
import { UserModule } from './modules/user/user.module'
import { TypegooseModule } from 'nestjs-typegoose'
import { HttpErrorFilter } from './filters'
import { APP_FILTER } from '@nestjs/core'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig, appConfig],
      validationSchema: validationSchema
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService
    }),
    TypegooseModule.forRootAsync({
      useClass: TypegooseConfigService
    }),
    UserModule
  ],
  controllers: [AppController],
  providers: [
    AppService
    // {
    //   provide: APP_FILTER,
    //   useClass: HttpErrorFilter
    // }
  ]
})
export class AppModule {}
