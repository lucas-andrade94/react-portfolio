import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

import "./style.css";

export const Header = () => {
  const [show, setShow] = useState(false);

  const transitionHeader = () => {
    if (window.scrollY > 450) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionHeader);
    return () => window.removeEventListener("scroll", transitionHeader);
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg={`${show ? "dark" : ""}`}
      variant="dark"
      fixed="top"
    >
      <Container className="d-flex align-items-center justify-content-between">
        <Navbar.Brand href="#home" className="fw-bold">
          Lucas Andrade
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="me-aut">
            <Nav.Link href="#about" className="text-light text-hover-nav">
              About
            </Nav.Link>
            <Nav.Link href="#projects" className="text-light text-hover-nav">
              Projects
            </Nav.Link>
            <Nav.Link href="#contact" className="text-light text-hover-nav">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
