const OfferModel = require("../models/Offer");

const getPhoneProducts = async (productType) => {
  const phones = await OfferModel.find({ productType }).lean();
  return phones;
};

const getLaptopProducts = async (productType) => {
  const laptops = await OfferModel.find({ productType }).lean();
  return laptops;
};

const getTVProducts = async (productType) => {
  const tvs = await OfferModel.find({ productType }).lean();
  return tvs;
};

module.exports = {
  getPhoneProducts,
  getLaptopProducts,
  getTVProducts,
};
