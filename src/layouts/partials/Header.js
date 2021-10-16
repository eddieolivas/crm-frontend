import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useHistory } from "react-router";

import { userLogout } from "../../api/userApi";
import logo from "../../assets/images/logo.png";

export const Header = () => {
  const history = useHistory();

  const logOut = async () => {
    userLogout();
    sessionStorage.removeItem("accessJWT");
    localStorage.removeItem("crmSite");
    history.push("/");
  };

  return (
    <Navbar
      className="px-3"
      collapseOnSelect
      variant="dark"
      bg="info"
      expand="md"
    >
      <Navbar.Brand>
        <a href="/">
          <img src={logo} alt="CRM logo" width="100px" />
        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <LinkContainer to="/dashboard">
            <Nav.Link>Dashboard</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/tickets">
            <Nav.Link>Tickets</Nav.Link>
          </LinkContainer>
          <Nav.Link onClick={logOut}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
