import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Contacts from "./components/Contacts/Contacts";
import Categories from "./components/Categories/Categories";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import CreateOffer from "./components/CreateOffer/CreateOffer";
import Phones from "./components/Phones/Phones";

export const UserContext = createContext({});

function App() {
  const [user, setUser] = useState({ isSuccessfullyLoggedIn: false });
  const userToken = localStorage.getItem("token");

  useEffect(() => {
    fetch("/home/checkuser", {
      method: "GET",
      headers: {
        Authorization: userToken,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) =>
        setUser({ isSuccessfullyLoggedIn: true, ...response })
      )
      .catch(() => setUser({ isSuccessfullyLoggedIn: false }));
  }, [user.email, userToken]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="app">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/contacts" exact component={Contacts} />
            <Route path="/categories" exact component={Categories} />
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />
            <Route path="/logout" exact component={Logout} />
            <Route path="/create-offer" exact component={CreateOffer} />
            <Route path="/categories/phones" exact component={Phones} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}

export default App;
