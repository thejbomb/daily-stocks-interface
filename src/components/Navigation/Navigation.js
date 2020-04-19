import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = ({ onRouteChange }) => {
    return (
        <div className="" style={{ alignSelf: 'center' }}>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="home">Stocks-Daily</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="justify-content-end" style={{ width: "100%" }}>
                        <Nav.Link onClick={() => onRouteChange("signin")}>Sign out</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation;