import { z } from 'zod';

const userNameValidationSchema = z.object({
  firstName: z.string().min(1).trim(),
  lastName: z.string().min(1).trim(),
});

const userAddressValidationSchema = z.object({
  street: z.string().min(1),
  city: z.string().min(1),
  country: z.string().min(1),
});

const userOrderValidationSchema = z.object({
  productName: z.string().min(1),
  price: z.number(),
  quantity: z.number(),
});

const userValidationSchema = z.object({
  userId: z.number(),
  password: z.string().max(20),
  username: z.string().min(1),
  fullName: userNameValidationSchema,
  age: z.number(),
  email: z.string().email(),
  hobbies: z.string().array(),
  address: userAddressValidationSchema,
  isActive: z.boolean().default(true),
  orders: userOrderValidationSchema.array().optional(),
  isDeleted: z.boolean().default(false),
});

export default userValidationSchema;
