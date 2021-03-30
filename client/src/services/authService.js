const url = "http://localhost:4300";

export const registerUser = (email, password) => {
  return fetch(`${url}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
};
