import Company from "../models/company.model.js";

export const registerCompany = async (req, res) => {
  try {
    const { companyName } = req.body;
    if (!companyName?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Company name is required.",
      });
    }
    const name = companyName.trim().toUpperCase();
    let company = await Company.findOne({ name });
    if (company) {
      return res.status(400).json({
        success: false,
        message: "A company with this name already exists.",
      });
    }
    company = await Company.create({
      name,
      userId: req.id,
    });
    return res.status(200).json({
      success: true,
      message: "Company registered successfully.",
      company,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const getCompanies = async (req, res) => {
  try {
    const userId = req.id;
    if (!userId) {
      return res.status(404).json({
        success: false,
        message: "userId not found.",
      });
    }
    const companies = await Company.find({ userId });
    if (!companies) {
      return res.status(404).json({
        success: false,
        message: "Companies not found.",
      });
    }
    return res.status(200).json({
      success: true,
      companies,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(404).json({
        success: false,
        message: "Company not found.",
      });
    }
    return res.status(200).json({
      success: true,
      company,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const updateCompany = async (req, res) => {
  try {
    const userId = req.id;
    const companyId = req.params.id;
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(404).json({
        success: false,
        message: "Company not found",
      });
    }
    if (company.userId.toString() !== userId.toString()) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to update this company information",
      });
    }
    const { name, description, website, location } = req.body;
    const file = req.file;

    if (name && name.toUpperCase() !== company.name) {
      const existingCompany = await Company.findOne({
        name: name.trim().toUpperCase(),
      });
      if (existingCompany) {
        return res.status(400).json({
          success: false,
          message: "A company with this name already exists",
        });
      }
    }

    company.name = name?.trim().toUpperCase() || company.name;
    company.description = description || company.description;
    company.website = website || company.website;
    company.location = location || company.location;

    await company.save();

    return res.status(200).json({
      success: true,
      message: "Company information updated successfully",
      company,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
