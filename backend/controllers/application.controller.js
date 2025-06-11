import Application from "../models/application.model.js";
import Job from "../models/job.model.js";

export const applyJob = async (req, res) => {
  try {
    const userId = req.id;
    const jobId = req.params.id;
    if (!jobId) {
      return res.status(400).json({
        success: false,
        message: "Job id is required",
      });
    }
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    //check if the user has already applied for the job
    const existingApplication = await Application.findOne({
      job: jobId,
      applicant: userId,
    });
    if (existingApplication) {
      return res.status(400).json({
        success: false,
        message: "You have already applied for this job.",
      });
    }

    const newApplication = await Application.create({
      job: jobId,
      applicant: userId,
    });

    job.applications.push(newApplication._id);
    await job.save();

    return res.status(201).json({
      success: true,
      message: "Application Created Successfully",
    });
  } catch (error) {
    return res.status(200).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const getAppliedJobs = async (req, res) => {
  try {
    const userId = req.id;
    const application = await Application.find({ applicant: userId })
      .sort({ createdAt: -1 })
      .populate({
        path: "job",
        populate: {
          path: "company",
        },
      });
    if (!application || application.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No applications",
      });
    }
    return res.status(200).json({
      success: true,
      application,
    });
  } catch (error) {
    return res.status(200).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const getApplicants = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId).populate({
      path: "applications",
      options: { sort: { createdAt: -1 } },
      populate: {
        path: "applicant",
        select: "-password",
      },
    });
    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }
    return res.status(200).json({
      success: true,
      applications: job.applications,
    });
  } catch (error) {
    return res.status(200).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const applicationId = req.params.id;
    if (!status) {
      return res.status(400).json({
        success: false,
        message: "status is required",
      });
    }
    const application = await Application.findById(applicationId);
    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }
    application.status = status.toLowerCase();
    await application.save();

    return res.status(200).json({
      success: true,
      message: "Status updated successfully",
    });
  } catch (error) {
    return res.status(200).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
