import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AdminLayout, UserLayout } from "./containers";
import { Login, Register, Page404, Page500 } from "./views/Pages";
// Styles
// CoreUI Icons Set
import "@coreui/icons/css/coreui-icons.min.css";
// Import Flag Icons Set
import "flag-icon-css/css/flag-icon.min.css";
// Import Font Awesome Icons Set
import "font-awesome/css/font-awesome.min.css";
// Import Simple Line Icons Set
import "simple-line-icons/css/simple-line-icons.css";
// Import Main styles for this application
import "./scss/style.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={UserLayout} name="24hReport" />
          <Route path="/home" component={UserLayout} name="Home" />
          <Route path="/sendReport" component={UserLayout} name="Gửi báo cáo" />
          <Route path="/viewReport" component={UserLayout} name="Xem báo cáo" />
          <Route path="/faq" component={UserLayout} name="FAQ" />
          <Route exact path="/login" name="Login Page" component={Login} />
          <Route
            exact
            path="/register"
            name="Register Page"
            component={Register}
          />
          {/* Admin */}
          <Route exact path="/admin" name="Admin" component={AdminLayout} />
          <Route path="/dashboard" name="Dashboard" component={AdminLayout} />
          <Route path="/users" name="Users" component={AdminLayout} />
          <Route path="/reports" name="Reports" component={AdminLayout} />
          <Route path="/posts" name="Posts" component={AdminLayout} />
          {/*  */}
          <Route exact path="/404" name="Page 404" component={Page404} />
          <Route exact path="/500" name="Page 500" component={Page500} />
          <Route path="*" name="Page 404" component={Page404} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
