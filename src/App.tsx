import './App.css';

import {BrowserRouter as Router , Route, Switch } from "react-router-dom";
import { routes } from './presentation/common/Routes';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={routes.INITIAL} />
      </Switch>
    </Router>
  );
}

export default App;
