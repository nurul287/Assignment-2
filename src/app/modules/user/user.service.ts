import { IUser, IUserOrder } from './user.interface';
import { User } from './user.model';

const createUserIntoDB = async (userData: IUser) => {
  if (await User.isUserExists(userData.userId)) {
    throw new Error('User already exists!');
  }
  const result = await User.create(userData);
  return result;
};

const getAllUsersFromBD = async () => {
  const result = await User.find().select({
    userName: 1,
    fullName: 1,
    age: 1,
    email: 1,
    address: 1,
    _id: 0,
  });
  return result;
};

const getSingleUserFromBD = async (userId: number) => {
  if (await User.isUserExists(userId)) {
    const result = await User.findOne({ userId }).select({
      userId: 1,
      userName: 1,
      fullName: 1,
      age: 1,
      email: 1,
      isActive: 1,
      hobbies: 1,
      address: 1,
      _id: 0,
    });
    return result;
  } else {
    throw new Error('User not found');
  }
};

const updateUserIntoDB = async (userData: IUser, userId: number) => {
  if (await User.isUserExists(userId)) {
    const result = await User.updateOne({ userId }, userData);
    if (result.modifiedCount > 0) {
      const updatedUser = await User.findOne({ userId }).select({
        userId: 1,
        userName: 1,
        fullName: 1,
        age: 1,
        email: 1,
        isActive: 1,
        hobbies: 1,
        address: 1,
        _id: 0,
      });

      return updatedUser;
    }
  } else {
    throw new Error('User not found');
  }
};

const deleteUserFromBD = async (userId: number) => {
  if (await User.isUserExists(userId)) {
    const result = await User.updateOne({ userId }, { isDeleted: true });
    return result;
  } else {
    throw new Error('User not found');
  }
};

const updateUserOrderIntoDB = async (orderData: IUserOrder, userId: number) => {
  if (await User.isUserExists(userId)) {
    const result = await User.updateOne(
      { userId },
      { $push: { orders: orderData } },
    );
    return result;
  } else {
    throw new Error('User not found');
  }
};

const getSingleUserOrdersFromDB = async (userId: number) => {
  if (await User.isUserExists(userId)) {
    const result = await User.findOne({ userId }).select({ orders: 1, _id: 0 });
    return result;
  } else {
    throw new Error('User not found');
  }
};

const getUserOrderTotalFromDB = async (userId: number) => {
  if (await User.isUserExists(userId)) {
    const result = await User.aggregate([
      {
        $match: {
          userId,
        },
      },
      {
        $unwind: '$orders',
      },
      {
        $project: {
          userId: '$userId',
          total: {
            $multiply: ['$orders.price', '$orders.quantity'],
          },
        },
      },
      {
        $group: {
          _id: '$userId',
          totalPrice: {
            $sum: '$total',
          },
        },
      },
      {
        $project: {
          _id: 0,
        },
      },
    ]);
    return { ...result[0] };
  } else {
    throw new Error('User not found');
  }
};

export const UserServices = {
  createUserIntoDB,
  getAllUsersFromBD,
  getSingleUserFromBD,
  updateUserIntoDB,
  deleteUserFromBD,
  updateUserOrderIntoDB,
  getSingleUserOrdersFromDB,
  getUserOrderTotalFromDB,
};
