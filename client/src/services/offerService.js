const url = "http://localhost:4300";

export const createOffer = () => {
  return fetch(`${url}/create-offer`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
};
