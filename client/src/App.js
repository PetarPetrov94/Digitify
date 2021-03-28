import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Contacts from "./components/Contacts/Contacts";
import Categories from "./components/Categories/Categories";
import Register from "./components/Register/Register";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contacts" exact component={Contacts} />
          <Route path="/categories" exact component={Categories} />
          <Route path="/register" exact component={Register} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
