import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
