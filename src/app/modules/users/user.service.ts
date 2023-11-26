import { User } from "./user.interface";
import { UserModel } from "../users.schemaModel";

const createAUser = async (user: User) => {
  const result = await UserModel.create(user);
  return result;
};

const getAllUserFromDb = async () => {
  const result = await UserModel.find();
  return result;
};
const getSpecificUserFromDb = async (_id: string) => {
  const result = await UserModel.findOne({ _id });
  return result;
};

export const UserService = {
  createAUser,
  getAllUserFromDb,
  getSpecificUserFromDb
};
