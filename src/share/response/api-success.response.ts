import { ApiProperty } from '@nestjs/swagger'

export class Pagination {
  @ApiProperty()
  total: number

  @ApiProperty()
  page: number

  @ApiProperty()
  limit: number

  @ApiProperty()
  lastPage: number
}

export class PaginatedResponse<TData> {
  data: TData[]

  @ApiProperty()
  pagination: Pagination

  @ApiProperty()
  message?: string = 'success'

  @ApiProperty()
  success: number

  static create<TData>(data: TData[], pagination: Pagination, message?: string): PaginatedResponse<TData> {
    const paginatedResponse = new PaginatedResponse<TData>()
    paginatedResponse.data = data
    paginatedResponse.pagination = pagination
    paginatedResponse.success = 1
    if (message) {
      paginatedResponse.message = message
    }
    return paginatedResponse
  }
}

export class ApiSuccessResponse<TData> {
  @ApiProperty()
  data?: TData

  @ApiProperty()
  message?: string = 'success'

  @ApiProperty()
  success: number

  static create<TData>(data?: TData, message?: string): ApiSuccessResponse<TData> {
    const apiSuccessResponse = new ApiSuccessResponse<TData>()
    apiSuccessResponse.success = 1
    if (data) {
      apiSuccessResponse.data = data
    }
    if (message) {
      apiSuccessResponse.message = message
    }
    return apiSuccessResponse
  }
}
