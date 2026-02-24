import express from "express";
const router = express.Router();
import authRoutes from "../modules/auth/auth.routes.js";
import userRoutes from "../modules/user/user.routes.js";
import messageRoutes from "../modules/message/message.routes.js";

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/messages", messageRoutes);

export default router;
