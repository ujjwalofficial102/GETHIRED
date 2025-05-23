import express from "express";

import protectRoute from "../middlewares/protectRoute.js";
import {
  getCompanies,
  getCompanyById,
  registerCompany,
  updateCompany,
} from "../controllers/company.controller.js";

const router = express.Router();

router.post("/register", protectRoute, registerCompany);
router.get("/getcompanies", protectRoute, getCompanies);
router.get("/getcompany/:id", protectRoute, getCompanyById);
router.post("/update/:id", protectRoute, updateCompany); //protect this route with middleware;

export default router;
