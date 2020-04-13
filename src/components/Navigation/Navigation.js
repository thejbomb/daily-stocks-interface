import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
    return (
        <div className="" style={{ alignSelf: 'center' }}>
            <Navbar bg="light">
                <Navbar.Brand href="home">Stocks-Daily</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="justify-content-end" style={{ width: "100%" }}>
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="profile">Profile</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation;