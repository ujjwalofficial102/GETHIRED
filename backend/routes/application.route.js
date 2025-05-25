import express from "express";

import protectRoute from "../middlewares/protectRoute.js";
import {
  applyJob,
  getApplicants,
  getAppliedJobs,
  updateStatus,
} from "../controllers/application.controller.js";

const router = express.Router();

router.get("/apply/:id", protectRoute, applyJob);
router.get("/appliedjobs", protectRoute, getAppliedJobs);
router.get("/applicants/:id", protectRoute, getApplicants);
router.put("/updatestatus/:id", protectRoute, updateStatus);

export default router;
