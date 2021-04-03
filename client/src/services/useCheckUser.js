import React, { useEffect, useState } from "react";

export default function useCheckUser() {
  const [user, setUser] = useState({});
  const [userChanged, setUserChanged] = useState(false);

  const userToken = localStorage.getItem("token");

  useEffect(() => {
    if (userChanged) {
      fetch("/home/checkuser", {
        method: "GET",
        headers: {
          Authorization: userToken,
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((user) => setUser({ isSuccessfullyLoggedIn: true, ...user }))
        .catch(() => setUser({ isSuccessfullyLoggedIn: false }));
    }
  }, []);

  return { user, setUserChanged };
}
