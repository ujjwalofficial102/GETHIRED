import express from "express";

import protectRoute from "../middlewares/protectRoute.js";
import {
  getCompanies,
  getCompanyById,
  registerCompany,
  updateCompany,
} from "../controllers/company.controller.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

router.post("/register", protectRoute, registerCompany);
router.get("/getcompanies", protectRoute, getCompanies);
router.get("/getcompany/:id", protectRoute, getCompanyById);
router.post("/update/:id", singleUpload, protectRoute, updateCompany); //protect this route with middleware;

export default router;
