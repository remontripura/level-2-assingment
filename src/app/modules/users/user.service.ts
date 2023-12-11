import { User } from "./user.interface";
import { UserModel } from "../users.schemaModel";

const createAUser = async (user : any) => {
  console.log(user);
  const result = await UserModel.create(user);
  return result;
};

const getAllUserFromDb = async () => {
  const result = await UserModel.find();
  return result;
};

const getSpecificUserFromDb = async (userId: string) => {
  const result = await UserModel.findOne({ userId });
  return result;
};

const updateSpecificUserFromDb = async (userId: string, users: User) => {
  const {
    username,
    fullName,
    age,
    email,
    isActive,
    hobbies,
    address,
    orders,
  } = users;
  const result = await UserModel.findOneAndUpdate(
    { userId },
    {
      $set: {
        username,
        fullName,
        age,
        email,
        isActive,
        hobbies,
        address,
        orders,
      },
    },
    { new: true }
  );
  return result;
};


const deleteSpecificUserFromDb = async (userId: string) => {
  const result = await UserModel.updateOne({ userId }, {isDelete: true});
  return result;
};
export const UserService = {
  createAUser,
  getAllUserFromDb,
  getSpecificUserFromDb,
  updateSpecificUserFromDb,
  deleteSpecificUserFromDb
};
