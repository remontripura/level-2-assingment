import { User } from "./user.interface";
import { UserModel } from "../users.schemaModel";

const createAUser = async (user: User) => {
  console.log(user);
  const result = await UserModel.create(user);
  return result;
};

const getAllUserFromDb = async () => {
  const result = await UserModel.find();
  return result;
};

const getSpecificUserFromDb = async (_id: string) => {
  const result = await UserModel.findOne({ _id }).select("-password");
  return result;
};

const updateSpecificUserFromDb = async (
  userId: string,
  users: User
) => {
  const { username, password, fullname, age, email, isActive, hobbies, address, orders } = users;
  const result = await UserModel.findOneAndUpdate(
    { userId },
    { $set: { username, password, fullname, age, email, isActive, hobbies, address, orders} },
    { new: true }
  );
  return result;
};

export const UserService = {
  createAUser,
  getAllUserFromDb,
  getSpecificUserFromDb,
  updateSpecificUserFromDb,
};
