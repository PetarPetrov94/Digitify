const OfferModel = require("../models/Offer");

const getPhoneProducts = async (productType) => {
  const phones = await OfferModel.find(productType).lean();
  return phones;
};

module.exports = {
  getPhoneProducts,
};
