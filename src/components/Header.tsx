import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header: React.FC = () => {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">My Movie App</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
        </Container>
      </Navbar>
    );
  };
  
  export default Header;