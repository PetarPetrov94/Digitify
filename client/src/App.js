import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Contacts from "./components/Contacts/Contacts";
import Categories from "./components/Categories/Categories";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";

function App() {
  return (
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
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
