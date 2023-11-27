import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();

router.post('/', UserController.createUser);
router.get('/', UserController.getAllUsers);
router.get('/:_id', UserController.getSpecificUsers);
router.put('/:userId', UserController.updateSpecificUsers);


export const UserRoute = router;