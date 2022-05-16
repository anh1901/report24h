import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  AppAsideToggler,
  AppNavbarBrand,
  AppSidebarToggler,
} from "@coreui/react";
import UserHeaderDropdown from "./UserHeaderDropDown";
import Search from "./components/SearchBar";

const propTypes = {
  children: PropTypes.node,
};
const defaultProps = {};

class UserHeader extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1",
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

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
            <NavLink href="/viewReport">Xem phản hồi</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="/faq">FAQ</NavLink>
          </NavItem>
        </Nav>
        {/* Search bar */}
        <Search />
        <Nav className="d-md-down-none" navbar>
          {/* Location funtion */}
          <NavItem>
            <NavLink href="#">
              <i className="icon-location-pin"></i>
            </NavLink>
          </NavItem>

          {/* Notification */}
          <UserHeaderDropdown notif />
          {/* Message */}
          <UserHeaderDropdown mssgs />
          {/* Account */}
          <UserHeaderDropdown accnt />
        </Nav>
        <AppAsideToggler className="d-md-down-none" />
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

UserHeader.propTypes = propTypes;
UserHeader.defaultProps = defaultProps;

export default UserHeader;
