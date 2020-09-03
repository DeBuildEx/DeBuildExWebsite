import React from "react";
import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import NotFound from "Components/NotFound/NotFound";
import Main from "Components/Main/Main";
import ProjectContainer from "Components/Projects/Single/ProjectContainer"

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
           <Route path={process.env.PUBLIC_URL+"/project/:slug"} exact component={ProjectContainer} />
           <Route component={NotFound} />
  </Switch>  </BrowserRouter>
  );
}

export default App;
