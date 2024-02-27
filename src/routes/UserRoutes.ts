import express from 'express';
const userRouter = express.Router();
// controler
import UserController from '../controllers/UserController';

// Routes
userRouter.post('/register', UserController.register);

export default userRouter