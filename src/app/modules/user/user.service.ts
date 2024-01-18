import { IUser } from './user.interface';
import { User } from './user.model';

const createUserIntoDB = async (userData: IUser) => {
  if (await User.isUserExists(userData.userId)) {
    throw new Error('User already exists!');
  }
  const result = await User.create(userData);
  return result;
};

const getAllUsersFromBD = async () => {
  const result = await User.find();
  return result;
};

const getSingleUserFromBD = async (userId: number) => {
  const result = await User.findOne({ userId });
  return result;
};

const deleteUserFromBD = async (userId: number) => {
  if (await User.isUserExists(userId)) {
    const result = await User.updateOne({ userId }, { isDeleted: true });
    return result;
  } else {
    throw new Error('User already exists!');
  }
};

export const UserServices = {
  createUserIntoDB,
  getAllUsersFromBD,
  getSingleUserFromBD,
  deleteUserFromBD,
};
