import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
//import { Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';


class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  componentDidMount() {

  }

  render() {

    return (
      <div className="App" >
        <Navigation/>
          
        <SignIn/>
      </div>
    )
  }
}

export default App;
