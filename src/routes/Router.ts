import express from 'express';
const router = express.Router();
import userRouter from './UserRoutes';// routes

router.use('/api/user', userRouter)

// test route
router.get('/', (req, res) => {
    res.send('api working!');
})

export default router