import mongoose from "mongoose";
import Job from "../models/job.model.js";

export const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      salary,
      location,
      jobType,
      experience,
      position,
      companyId,
    } = req.body;
    const userId = req.id;

    if (
      !title.trim() ||
      !description.trim() ||
      !requirements.trim() ||
      !salary.trim() ||
      !location.trim() ||
      !jobType.trim() ||
      !experience.trim() ||
      !position.trim() ||
      !companyId.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required!",
      });
    }
    if (!mongoose.Types.ObjectId.isValid(companyId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid CompanyId",
      });
    }
    const reqArr = requirements?.trim()
      ? requirements
          .split(",")
          .map((e) => e.trim())
          .filter(Boolean)
      : null;
    if (reqArr.length === 0 || reqArr === null) {
      return res.status(400).json({
        success: false,
        message: "requirements are required",
      });
    }
    const salaryNumber = Number(salary);
    if (isNaN(salaryNumber)) {
      return res.status(400).json({
        success: false,
        message: "Salary must be a number",
      });
    }
    const job = await Job.create({
      title,
      description,
      requirements: reqArr,
      salary: salaryNumber,
      location,
      jobType,
      experience,
      position,
      company: companyId,
      createdBy: userId,
    });

    return res.status(201).json({
      success: true,
      message: "New job created successfully",
      job,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const getAllJobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    };
    const jobs = await Job.find(query)
      .populate("company")
      .sort({ createdAt: -1 });
    if (!jobs) {
      return res.status(404).json({
        success: false,
        message: "Jobs are not found",
      });
    }
    return res.status(200).json({
      success: true,
      jobs,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    if (!jobId || !mongoose.Types.ObjectId.isValid(jobId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid JobId",
      });
    }
    const job = await Job.findById(jobId).populate({
      path: "applications",
    });
    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    return res.status(200).json({
      success: true,
      job,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const getAdminJobs = async (req, res) => {
  try {
    const adminId = req.id;
    const jobs = await Job.find({ createdBy: adminId })
      .populate("company")
      .sort({ createdAt: -1 });
    if (!jobs) {
      return res.status(404).json({
        success: false,
        message: "Jobs are not found",
      });
    }
    return res.status(200).json({
      success: true,
      jobs,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
