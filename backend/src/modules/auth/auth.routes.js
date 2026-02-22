import express from 'express';
const router = express.Router();

import { signUpController, loginController } from './auth.controller.js';

router.post('/signup', signUpController)
router.post('/login', loginController)


export default router;