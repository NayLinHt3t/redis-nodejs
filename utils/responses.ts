import { Response } from "express";

export function successResponse(
  res: Response,
  data: any,
  message: string = "Success",
  statusCode = 200
) {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
}

export function errorResponse(
  res: Response,
  message: string = "Error",
  statusCode = 500,
  errors: any = null
) {
  return res.status(statusCode).json({
    success: false,
    message,
    errors,
  });
}

export function notFoundResponse(res: Response) {
  return res.status(404).json({
    success: false,
    message: "Not found",
  });
}
