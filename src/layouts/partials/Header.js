import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";

export const Header = () => {
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
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/dashboard">Tickets</Link>
          <Link to="/dashboard">Logout</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
