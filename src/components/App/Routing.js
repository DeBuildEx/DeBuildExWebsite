import React from "react";
import { BrowserRouter, Route, Switch, Redirect , HashRouter} from "react-router-dom";
import NotFound from "Components/NotFound/NotFound";
import Main from "Components/Main/Main";

function App() {
  return (
    <BrowserRouter basename="/">
      <Switch>
            <Route
              path={process.env.PUBLIC_URL+"/"}
              exact
              //render={(routeProps) => <Redirect {...routeProps} to="/login" />}
              component={Main}
            />
           <Route path="/signup" exact component={NotFound} />
           {true && <Route component={NotFound} />}
  </Switch>  </BrowserRouter>
  );
}

export default App;
