import React from 'react';
import { 
  Navbar, 
  Nav 
} from 'react-bootstrap';

const Navigation = ({onRouteChange, signedIn}) => {
  if (signedIn === true) {
    return (
      <div className="" style={{ alignSelf: 'center' }}>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand onClick={() => onRouteChange("home")}>Daily Stocks</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="justify-content-end" style={{ width: "100%" }}>
              <Nav.Link onClick={() => onRouteChange("stocks")}>Stocks</Nav.Link>
              <Nav.Link onClick={() => onRouteChange("signin")}>Sign out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  } else {
    return (
      <div className="" style={{ alignSelf: 'center' }}>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand onClick={() => onRouteChange("signin")}>Daily Stocks</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Navigation;