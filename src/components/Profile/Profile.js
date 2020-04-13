import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Profile = () => {
    return (
        <div className="App">
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Stocks-Daily</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    )
}

export default Profile;