import { Router } from "express";
import { userController } from "../controllers";
const router = Router();

router.post("/get-user-info", userController.getUserInfo);

export default router;
