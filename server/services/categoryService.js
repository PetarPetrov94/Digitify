const OfferModel = require("../models/Offer");

const getPhoneProducts = async (productType) => {
  const phones = await OfferModel.find({ productType }).lean();
  return phones;
};

const getLaptopProducts = async (productType) => {
  const laptops = await OfferModel.find({ productType }).lean();
  return laptops;
};

module.exports = {
  getPhoneProducts,
  getLaptopProducts,
};
