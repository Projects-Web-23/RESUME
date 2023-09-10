import { Router } from 'express';
import authController from '../controllers/auth.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';
const authRouter = Router();
authRouter.post('/signup', authController.signup);
authRouter.post('/login', authController.login);
authRouter.get('/me', authMiddleware, authController.me);
authRouter.post('/me2', authMiddleware, authController.me2);
export default authRouter;