const Token = require("../models/Token");

const createToken = async (token) => {
  return await Token.create(token);
};

const deleteToken = async (tokenId) => {
  const foundToken = await Token.findByIdAndDelete(tokenId);

  if (!foundToken) {
    throw new Error(`Token ${tokenId} not found`);
  }
  return foundToken;
};

const findOne = async (payload) => {
  const foundToken = await Token.findOne(payload);

  return foundToken;
};

module.exports = {
  createToken,
  deleteToken,
  findOne,
};
