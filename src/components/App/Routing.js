import React from "react";
import { BrowserRouter, Route, Switch, Redirect , HashRouter} from "react-router-dom";
import NotFound from "Components/NotFound/NotFound";
import Main from "Components/Main/Main";

function App() {
  return (
    <HashRouter basename="/">
            <Route
              path="/"
              exact
              //render={(routeProps) => <Redirect {...routeProps} to="/login" />}
              component={Main}
            />
           <Route path="/signup" exact component={NotFound} />
           {false && <Route component={NotFound} />}
    </HashRouter>
  );
}

export default App;
