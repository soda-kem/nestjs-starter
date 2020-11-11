import { Injectable, PipeTransform } from '@nestjs/common'

/**
 * Loại bỏ validationContext mà ta đã inject vào request body, params, query để Validation Pipe làm việc chính xác
 * @see src/interceptors/validation-context.interceptor.ts
 * @see src/validators/IsExistUserId.validator.ts
 */
@Injectable()
export class StripValidationContextPipe implements PipeTransform {
  transform(value: any) {
    if (value.validationContext) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { validationContext, ...rest } = value
      return rest
    }
    return value
  }
}
