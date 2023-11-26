
import { Model, Schema, model } from "mongoose";
import { Order, User } from "./users/user.interface";

const orderSchema = new Schema<Order>({
  productName: { type: String},
  price: { type: Number},
  quantity: { type: Number},
});

const userSchema = new Schema<User>({
  username: { type: String},
  password: { type: String},
  fullname: {
    firstName: { type: String},
    lastName: { type: String},
  },
  age: { type: Number},
  email: { type: String},
  isActive: { type: Boolean},
  hobbies: { type: [String] },
  address: {
    street: { type: String},
    city: { type: String},
    country: { type: String},
  },
  orders: { type: [orderSchema] },
});

export const UserModel = model<User>('User', userSchema);