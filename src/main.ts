import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { useContainer } from 'class-validator'
import { ValidationContextInterceptor } from './interceptors'
import { ValidationError, ValidationPipe } from '@nestjs/common'
import { ValidationException } from './share/exceptions'
import { StripValidationContextPipe } from './pipes'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { ConfigService } from '@nestjs/config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  useContainer(app.select(AppModule), { fallbackOnErrors: true })
  app.enableCors()
  app.useGlobalInterceptors(new ValidationContextInterceptor())
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      validationError: {
        target: false,
        value: false
      },
      exceptionFactory: (errors: ValidationError[]) => {
        throw new ValidationException(errors)
      }
    }),
    new StripValidationContextPipe()
  )
  const options = new DocumentBuilder()
    .setTitle('NestJS starter')
    .setDescription('The NestJS starter API description')
    .setVersion('1.0')
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('docs', app, document)
  const configService = app.get(ConfigService)
  await app.listen(configService.get('app.port'))
}

bootstrap()
