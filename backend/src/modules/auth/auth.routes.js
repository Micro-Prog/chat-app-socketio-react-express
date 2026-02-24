import express from 'express';
const router = express.Router();

import { signUpController, loginController } from './auth.controller.js';
import protectRoute from '../../middleware/auth.middleware.js';
import { checkAuth } from './auth.controller.js';



router.post('/signup', signUpController);
router.post('/login', loginController);
router.get('/check', protectRoute, checkAuth);


export default router;