import express from "express";
import protectRoute from "../middlewares/protectRoute.js";
import {
  getAdminJobs,
  getAllJobs,
  getJobById,
  postJob,
} from "../controllers/job.controller.js";

const router = express.Router();

router.post("/post", protectRoute, postJob);
router.get("/alljobs", protectRoute, getAllJobs);
router.get("/get/:id", protectRoute, getJobById);
router.get("/adminjobs", protectRoute, getAdminJobs);

export default router;
