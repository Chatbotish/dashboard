import "./App.css";

import { BrowserRouter as Router, Switch } from "react-router-dom";

import {
  PrivateRoute,
  PublicRoute,
  routes,
} from "./presentation/common/Routes";

// Component imports
import { Auth0, Home, Initial, Login } from "./presentation";

function App() {
  return (
    <Auth0>
      <Router>
        <Switch>
          <PublicRoute exact path={routes.INITIAL} component={Initial} />
          <PublicRoute exact path={routes.LOGIN} component={Login} />
          <PrivateRoute exact path={routes.HOME} component={Home} />
        </Switch>
      </Router>
    </Auth0>
  );
}

export default App;
