const url = "http://localhost:4300";

export const findPhoneOffers = () => {
  return fetch(`${url}/categories/phones`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};
