import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import { AppBreadcrumb, AppHeader } from "@coreui/react";
// routes config
import routes from "../../routes";

import UserFooter from "./UserFooter";
import UserHeader from "./UserHeader";
import { Home } from "../../views";
import GuestHeader from "./GuestHeader";

class UserLayout extends Component {
  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          {/* Logged in */}
          {/* <UserHeader /> */}
          {/* Not logged in */}
          <GuestHeader />
        </AppHeader>

        <div className="app-body">
          <main className="main">
            <AppBreadcrumb appRoutes={routes} />
            <Container fluid>
              <Switch>
                {routes.map((route, idx) => {
                  return route.component ? (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      render={(props) => <route.component {...props} />}
                    />
                  ) : null;
                })}
                <Redirect from="/" to="/home" />
              </Switch>
            </Container>
          </main>
        </div>
        <UserFooter />
      </div>
    );
  }
}

export default UserLayout;
