import React from "react";
import {Navbar,NavDropdown,Nav} from 'react-bootstrap';
function Header() {
  return (
  <Navbar className="header" collapseOnSelect expand="lg"  variant="dark" >
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <h1>N O T E S</h1>
    </Nav>
    <Nav>
      <Nav.Link href="/">Home</Nav.Link>
      <NavDropdown  title="Help" id="collasible-nav-dropdown">
        <NavDropdown.Item href="tel:7729010326">Contact</NavDropdown.Item>
        <NavDropdown.Item href="https://newsletter-s.herokuapp.com/">SignUp to newsletter</NavDropdown.Item>
        <NavDropdown.Item href="mailto:saiarepuri2000@gmail.com">Mail me</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown  title="More about Me" id="collasible-nav-dropdown">
        <NavDropdown.Item href="https://www.dailywritingtips.com/notes-about-note-and-its-relations/">Learn More</NavDropdown.Item>
        <NavDropdown.Item href="https://www.linkedin.com/in/sai-varma-arepuri-505883176/">About Me</NavDropdown.Item>
        <NavDropdown.Item href="https://saiprojectmern.netlify.app/" >My MERN project</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="https://faqappsaivarma.netlify.app/">FAQ react app</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
}

export default Header;
