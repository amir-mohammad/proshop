import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./header.css";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
const Header = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Proshop</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/cart">
              <Nav.Link href="/cart" className="header_icon_align">
                <FaShoppingCart /> <span>Cart</span>{" "}
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/signin">
              <Nav.Link className="header_icon_align">
                {" "}
                <FaUserAlt /> <span>Sign In</span>{" "}
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
