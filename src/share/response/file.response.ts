import { Response } from 'express'

interface Option {
  contentType: string
  fileName: string
}

export class FileResponse {
  static sendFileBuffer(res: Response, buffer: Buffer | ArrayBuffer, option: Option): Response {
    res.setHeader('Content-Type', option.contentType)
    res.setHeader(
      'Content-Disposition',
      `attachment; filename="${option.fileName}"; filename*=UTF-8''${option.fileName}`
    )
    return res.send(buffer)
  }

  static sendExcel(res: Response, buffer: Buffer | ArrayBuffer, fileName: string) {
    return FileResponse.sendFileBuffer(res, buffer, {
      contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      fileName
    })
  }
}
