import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Contacts from "./components/Contacts/Contacts";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contacts" exact component={Contacts} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
