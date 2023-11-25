export type Order = {
  productName: string;
  price: number;
  quantity: number;
};

export type User = {
  userId: string;
  password: string;
  fullname: {
    firstName: string;
    lastName: string;
  };
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: {
    street: string;
    city: string;
    country: string;
  };
  orders: Order[];
};
