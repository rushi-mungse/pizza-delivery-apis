import { Router } from "express";
import { registerController, userController } from "../controllers";
const router = Router();

router.post("/register", registerController.registerUser);
router.post("/get-user-info", userController.getUserInfo);

export default router;
