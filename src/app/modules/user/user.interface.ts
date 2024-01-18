import { Model } from 'mongoose';

export interface IUserName {
  firstName: string;
  lastName: string;
}

export interface IUserAddress {
  street: string;
  city: string;
  country: string;
}
export interface IUserOrder {
  productName: string;
  price: number;
  quantity: number;
}

export interface IUser {
  userId: number;
  username: string;
  password: string;
  fullName: IUserName;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: IUserAddress;
  isDeleted?: boolean;
  orders?: IUserOrder[];
}

// for creating static
export interface UserModel extends Model<IUser> {
  isUserExists: (id: number) => Promise<IUser | null>;
}
