import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import About from "./components/About/About";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
