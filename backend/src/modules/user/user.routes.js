import express from 'express';
const router = express.Router();

import protectRoute from '../../middleware/auth.middleware.js';
import { checkAuth, updateProfileController } from './user.controller.js';



router.get('/check', protectRoute, checkAuth);
router.put('/update-profile', protectRoute, updateProfileController);


export default router;