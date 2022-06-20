const companyService = require("../services/companies");

const createCompany = async (req, res) => {
  try {
    const company = req.body;
    const createdCompany = await companyService.createCompany(company);
    res.status(201).json({
      message: "Company created successfully",
      company: createdCompany,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}; // end of createCompany

const findAll = async (req, res) => {
  try {
    const companies = await companyService.findAll();
    res.status(200).json({
      message: "Companies fetched successfully",
      companies: companies,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}; // end of findAllCompanies

const findById = async (req, res) => {
  try {
    const companyId = req.params.companyId;
    const company = await companyService.findById(companyId);
    res.status(200).json({
      message: "Company fetched successfully",
      company: company,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}; // end of findCompanyById

const updateCompany = async (req, res) => {
  try {
    const companyId = req.params.companyId;
    const company = req.body;
    const updatedCompany = await companyService.updateCompany(
      companyId,
      company,
    );
    res.status(200).json({
      message: "Company updated successfully",
      company: updatedCompany,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}; // end of updateCompany

const deleteCompany = async (req, res) => {
  try {
    const companyId = req.params.companyId;
    const deletedCompany = await companyService.deleteCompany(companyId);
    res.status(200).json({
      message: "Company deleted successfully",
      company: deletedCompany,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}; // end of deleteCompany

module.exports = {
  createCompany,
  findAll,
  findById,
  updateCompany,
  deleteCompany,
};
