import { Schema, model } from "mongoose";
import { Order, User } from "./users/user.interface";
import bcrypt from "bcrypt";
import config from "../config";

const orderSchema = new Schema<Order>({
  productName: { type: String },
  price: { type: Number },
  quantity: { type: Number },
});

const userSchema = new Schema<User>({
  userId: { type: Number, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  fullname: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  isActive: { type: Boolean, required: true },
  hobbies: { type: [String], required: true },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
  },
  orders: { type: [orderSchema], required: true },
  isDelete: { type: Boolean, default: false },
});

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, Number(config.bcrypt_salt));
  next();
});
userSchema.post("save", async function (doc, next) {
  doc.password = "";
  next();
});

userSchema.pre("find", function (next) {
  this.find({ isDelete: { $ne: true } });
  next();
});
export const UserModel = model<User>("User", userSchema);
