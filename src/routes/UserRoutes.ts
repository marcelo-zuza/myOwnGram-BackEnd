import express from 'express';
const userRouter = express.Router();
// controler
const {register, login} = require('../controllers/UserController');

// Middlewares
import userValidations from '../middlewares/userValidations';
import validate from '../middlewares/handleValidation';

// Routes
userRouter.post('/register', userValidations.userCreateValidation(), validate, register);
userRouter.post('/login', userValidations.loginValidation(), validate, login);


export default userRouter