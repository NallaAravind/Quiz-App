import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import quizContext from "../../context/quizContext";
import { Navbar, Nav, Container } from 'react-bootstrap';
import './NavBar.css'; // Corrected import statement for CSS

const NavBar = () => {
  const { adminAuthenticated } = useContext(quizContext);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Quiz App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
            </Nav.Item>
            {!adminAuthenticated ? (
              <Nav.Item>
                <Nav.Link as={Link} to="/admin-login">Admin</Nav.Link>
              </Nav.Item>
            ) : (
              <Nav.Item>
                <Nav.Link as={Link} to="/admin">Dashboard</Nav.Link>
              </Nav.Item>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
