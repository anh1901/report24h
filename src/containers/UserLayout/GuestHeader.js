import React, { Component } from "react";
import { Button, Nav, NavItem, NavLink } from "reactstrap";
import PropTypes from "prop-types";
import {
  AppAsideToggler,
  AppNavbarBrand,
  AppSidebarToggler,
} from "@coreui/react";
import Search from "./components/SearchBar";

const propTypes = {
  children: PropTypes.node,
};
const defaultProps = {};

class GuestHeader extends Component {
  render() {
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
        {/* d-md-down-none làm biến mất nếu thu nhỏ */}
        <Nav className="mr-auto d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink href="/home">Tin mới</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="/sendReport">Gửi báo cáo</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="/faq">FAQ</NavLink>
          </NavItem>
        </Nav>
        {/* Search bar */}
        <Search />
        <Nav className="d-md-down-none" navbar>
          {/* Login button */}
          <Button
            block
            color="primary"
            onClick={() => (window.location.href = "/login")}
          >
            Đăng nhập ngay
          </Button>
        </Nav>
        <AppAsideToggler className="d-md-down-none" />
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

GuestHeader.propTypes = propTypes;
GuestHeader.defaultProps = defaultProps;

export default GuestHeader;
