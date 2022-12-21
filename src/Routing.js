import React from "react";
import "./App.css";
import { Router, Route, Switch, useHistory } from "react-router-dom";
import { MainRouter } from "./Router";
import Layout from "./Layout";

const Navigation = () => {
  const history = useHistory();

  return (
    <Router history={history}>
      <Switch>
        {MainRouter.map((i, index) => (
          <Route
            exact={i.exact}
            key={index}
            path={i.path}
            render={(props) => (
              <Layout history={props.history}>
                <i.component {...props} />
              </Layout>
            )}
          />
        ))}

        
      </Switch>
    </Router>
  );
};

export default Navigation;
