import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import PropTypes from "prop-types";
import {
  AppAsideToggler,
  AppNavbarBrand,
  AppSidebarToggler,
} from "@coreui/react";
import AdminHeaderDropdown from "./AdminHeaderDropdown";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class AdminHeader extends Component {
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{
            src: "https://upload.wikimedia.org/wikipedia/vi/6/6b/Logo_trang_24h.png",
            width: 120,
            height: 50,
            alt: "24h Report Logo",
          }}
          minimized={{
            src: "https://upload.wikimedia.org/wikipedia/vi/6/6b/Logo_trang_24h.png",
            width: 30,
            height: 30,
            alt: "24h Report Logo",
          }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink href="/">Dashboard</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#">Users</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#">Settings</NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <AdminHeaderDropdown notif />
          <AdminHeaderDropdown tasks />
          <AdminHeaderDropdown mssgs />
          <NavItem className="d-md-down-none">
            <NavLink href="#">
              <i className="icon-location-pin"></i>
            </NavLink>
          </NavItem>
          <AdminHeaderDropdown accnt />
        </Nav>
        <AppAsideToggler className="d-md-down-none" />
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

AdminHeader.propTypes = propTypes;
AdminHeader.defaultProps = defaultProps;

export default AdminHeader;
