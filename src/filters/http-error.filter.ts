import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Logger, NotFoundException } from '@nestjs/common'
import { ValidationException } from '../share/exceptions'
import { Request, Response } from 'express'
import { ApiErrorResponse } from '../share/response'
import { get } from 'lodash'

@Catch()
export class HttpErrorFilter implements ExceptionFilter {
  private dontReports: Array<any> = [ValidationException, NotFoundException]

  catch(exception: HttpException | any, host: ArgumentsHost): void {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const request = ctx.getRequest<Request>()

    this.logException(exception, request)

    let status = 500,
      error = null
    const message = this.getExceptionMessage(exception)

    if (exception instanceof HttpException) {
      status = exception.getStatus()
    }

    if (exception instanceof ValidationException) {
      error = exception.getResponse()
    }

    const errorResponse: ApiErrorResponse = ApiErrorResponse.create(message, error)

    response.status(status).json(errorResponse)
  }

  protected getExceptionMessage(exception: HttpException | any): string {
    let message = get(exception, 'message') || get(exception, 'response.message') || 'Internal Server Error'

    if (exception instanceof ValidationException) {
      message = 'Validation Failed'
    }

    return message
  }

  private logException(exception: any, request: Request) {
    if (this.shouldReportException(exception)) {
      Logger.error(`${request.method} ${request.url}`, null, 'ExceptionFilter')
      console.log(exception)
    }
  }

  private dontReportException(exception: any) {
    return this.dontReports.some(e => exception instanceof e)
  }

  private shouldReportException(exception: any) {
    return !this.dontReportException(exception)
  }
}
