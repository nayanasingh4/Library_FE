import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Library Management System</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Signup</Nav.Link>
            <Nav.Link href="/">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
    </div>
  )
}

export default Header