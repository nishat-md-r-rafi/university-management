import { NextFunction, Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';
import { UserServices } from './user.service';

const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((error) => next(error));
  };
};

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const createStudent: RequestHandler = catchAsync(async (req, res, next) => {
  const { password, student: studentData } = req.body;

  // create student
  const result = await UserServices.createStudentIntoDB(password, studentData);
  res.send(result).status(httpStatus.OK);
});

export const UserController = {
  createStudent,
};
