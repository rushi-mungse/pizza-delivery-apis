import { Router } from "express";
import { registerController, userController } from "../controllers";
const router = Router();

router.post("/register", registerController.register);
router.post("/get-user-info", userController.getUserInfo);

export default router;
