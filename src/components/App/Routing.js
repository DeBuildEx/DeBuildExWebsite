import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import NotFound from "Components/NotFound/NotFound";
import Main from "Components/Main/Main";

function App() {
  return (
    <BrowserRouter>
          <Switch>
            <Route
              path="/"
              exact
              //render={(routeProps) => <Redirect {...routeProps} to="/login" />}
              component={Main}
            />
            <Route path="/signup" exact component={Main} />
           {false && <Route component={NotFound} />}
          </Switch>
    </BrowserRouter>
  );
}

export default App;
