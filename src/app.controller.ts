import { Controller, Get, HttpCode } from '@nestjs/common'
import { AppService } from './app.service'
import { ApiExcludeEndpoint, ApiTags } from '@nestjs/swagger'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiTags('Health check')
  @Get('/clap')
  getHello(): string {
    return this.appService.getHello()
  }

  @ApiExcludeEndpoint()
  @Get('/favicon.ico')
  @HttpCode(204)
  favicon(): string {
    return 'No Content'
  }
}
