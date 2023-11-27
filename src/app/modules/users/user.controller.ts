import { Request, Response } from "express";
import { UserService } from "./user.service";
import { User } from "./user.interface";

const createUser = async (req: Request, res: Response) => {
  try {
    const {user: userData} = req.body;
    const result = await UserService.createAUser(userData);
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
    console.log(_id);
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
// update single users
const updateSpecificUsers = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const users : User = req.body;
    const result = await UserService.updateSpecificUserFromDb(userId, users);
    
    res.status(200).json({
      success: true,
      messege: "update successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
export const UserController = {
  createUser,
  getAllUsers,
  getSpecificUsers,
  updateSpecificUsers
};
