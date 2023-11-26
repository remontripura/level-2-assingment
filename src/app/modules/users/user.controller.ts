import { Request, Response } from "express";
import { UserService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const result = await UserService.createAUser(user);
    res.status(200).json({
      success: true,
      messege: "new user create successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

// get all users
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getAllUserFromDb();
    res.status(200).json({
      success: true,
      messege: "all data get successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
// get single users
const getSpecificUsers = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const result = await UserService.getSpecificUserFromDb(_id);
    res.status(200).json({
      success: true,
      messege: "get single user successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
export const UserController = {
  createUser,
  getAllUsers,
  getSpecificUsers
};
