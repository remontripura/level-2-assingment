export type Order = {
  productName: string;
  price: number;
  quantity: number;
};
export type Address = {
  street: string;
  city: string;
  country: string;
};

export type User = {
  userId: number;
  username: string;
  password: string;
  fullname: {
    firstName: string;
    lastName: string;
  };
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: Address;
  orders: Order[];
  isDelete: boolean;
};
