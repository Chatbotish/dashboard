import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "./presentation/common/Routes";

// Component imports
import Home from "./presentation/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={routes.INITIAL} component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
