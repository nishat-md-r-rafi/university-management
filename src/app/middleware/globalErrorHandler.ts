import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';

const globalErrorHandler = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  err: any,
  req: Request,
  res: Response,
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  const message = err.message || 'Something went wrong!';

  return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
    success: false,
    message,
    error: err,
  });
};

export default globalErrorHandler;
