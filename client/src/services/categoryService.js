const url = "http://localhost:4300";

const normalisePhoneResponse = ({ phones } = { phones: [] }) => phones;

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

const normalizeLaptopResponse = ({ laptops } = { laptops: [] }) => laptops;

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

const normalizeTvResponse = ({ tvs } = { tvs: [] }) => tvs;

export const findTvOffers = () => {
  return fetch(`${url}/categories/tvs`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then(normalizeTvResponse);
};
