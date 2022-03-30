import { Router } from "express";
import { loginController, registerController } from "../controllers";
const router = Router();

router.post("/register", registerController.registerUser);
router.post("/login", loginController.loginUser);

export default router;
