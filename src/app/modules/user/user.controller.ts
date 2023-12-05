import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import { UserServices } from './user.service';

const createStudent: RequestHandler = async (req, res, next) => {
  try {
    const { password, student: studentData } = req.body;

    // create student
    const result = await UserServices.createStudentIntoDB(
      password,
      studentData,
    );
    res.send(result).status(httpStatus.OK);
  } catch (error) {
    next(error);
  }
};

export const UserController = {
  createStudent,
};
