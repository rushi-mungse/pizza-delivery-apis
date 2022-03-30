import { Router } from "express";
import { loginController, registerController } from "../controllers";
import userController from "../controllers/auth/userController";
const router = Router();
import { auth } from "../middlewares";

router.post("/register", registerController.registerUser);
router.post("/login", loginController.loginUser);
router.post("/me", auth, userController.me);

export default router;
