import { Response } from "express";

export const sendSuccess = (res: Response, data: any, codeStatus: number = 200) => {
  res.status(codeStatus).send({
    success: true,
    data,
    error: null
  })
}

export const sendError = (res: Response, message: string = 'Internal Server Error', codeStatus: number = 500) => {
  res.status(codeStatus).send({
    success: false,
    data: null,
    error: {
      message
    }
  })
}