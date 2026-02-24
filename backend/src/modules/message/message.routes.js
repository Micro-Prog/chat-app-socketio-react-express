import express from 'express';
const router = express.Router();
import { 
    getUsersForSidebarController,
    getMessagesForUserController,
    markMessageAsSeenController
 } from './message.controller.js';
import protectRoute from '../../middleware/auth.middleware.js';



router.get('/getUsersForSidebar', protectRoute, getUsersForSidebarController);
router.get('/getMessages/:userId', protectRoute, getMessagesForUserController);
router.put('/markAsSeen/:messageId', protectRoute, markMessageAsSeenController);

export default router;