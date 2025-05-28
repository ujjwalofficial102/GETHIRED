import express from "express";
import {
  login,
  logout,
  register,
  updateProfile,
} from "../controllers/user.controller.js";
import protectRoute from "../middlewares/protectRoute.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

router.post("/register", singleUpload, register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/update", protectRoute, updateProfile); //protect this route with middleware;

export default router;
