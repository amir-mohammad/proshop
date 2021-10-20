import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./header.css";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
const Header = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
      <Container>
        <Navbar.Brand href="#home">Proshop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home" className="header_icon_align">
              <FaShoppingCart /> <span>Cart</span>{" "}
            </Nav.Link>
            <Nav.Link href="#link" className="header_icon_align">
              {" "}
              <FaUserAlt /> <span>Sign In</span>{" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
