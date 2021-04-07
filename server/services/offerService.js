const OfferModel = require("../models/Offer");

const createOffer = async (data) => {
  const offerToCreate = new OfferModel({ ...data });
  return offerToCreate.save();
};

module.exports = {
  createOffer,
};
