const Companies = require("../models/Companies");

const createCompany = async (company) => {
  return await Companies.create(company);
};

const findAll = async () => {
  return await Companies.find();
};

const findById = async (companyId) => {
  const foundComapny = await Companies.findById(companyId);

  return foundComapny;
};

const updateCompany = async (companyId, company) => {
  const foundComapny = await Companies.findByIdAndUpdate(companyId, company);
  if (!foundComapny) {
    throw new Error(`Company ${companyId} not found`);
  }
  return foundComapny;
};
const deleteCompany = async (companyId) => {
  const foundComapny = await Companies.findByIdAndDelete(companyId);
  if (!foundComapny) {
    throw new Error(`Company ${companyId} not found`);
  }
  return foundComapny;
};

module.exports = {
  createCompany,
  findAll,
  findById,
  updateCompany,
  deleteCompany,
};
