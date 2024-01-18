import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post('/', UserControllers.createUser);
router.get('/', UserControllers.getAllUsers);
router.get('/:userId', UserControllers.getSingleUser);
router.delete('/:userId', UserControllers.deleteUser);
router.put('/:userId', UserControllers.updateUser);
router.put('/:userId/orders', UserControllers.updateUserOrder);

export const UserRoutes = router;
