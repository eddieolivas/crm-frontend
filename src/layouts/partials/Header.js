import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../assets/images/logo.png';

export const Header = () => {
  return (
    <Navbar
      className="px-3"
      collapseOnSelect
      variant="dark"
      bg="info"
      expand="md">
      <Navbar.Brand>
        <a href="/"><img src={logo} alt="CRM logo" width="100px" /></a>
      </Navbar.Brand>
      <Navbar.Toggle 
        aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          <Nav.Link href="/dashboard">Tickets</Nav.Link>
          <Nav.Link href="/dashboard">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
