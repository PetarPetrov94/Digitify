const url = "http://localhost:4300";

const normalisePhoneResponse = ({ phones } = { phones: [] }) => phones;
const normalizeLaptopResponse = ({ laptops } = { laptops: [] }) => laptops;

export const findPhoneOffers = () => {
  return fetch(`${url}/categories/phones`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then(normalisePhoneResponse);
};

export const findLaptopOffers = () => {
  return fetch(`${url}/categories/laptops`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then(normalizeLaptopResponse);
};
