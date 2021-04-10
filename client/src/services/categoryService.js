const url = "http://localhost:4300";

const normalisePhoneResponse = ({ phones } = { phones: [] }) =>
  phones.concat(phones).concat(phones);

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
