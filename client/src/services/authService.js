const url = "http://localhost:4200";

export const registerUser = () => {
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
