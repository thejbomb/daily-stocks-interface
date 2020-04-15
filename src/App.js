import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Profile from './components/Profile/Profile'
import Registration from './components/Registration/Registration';


class App extends Component {
  constructor() {
    super();
    this.state = {
      signedIn: 'false',
      route: 'register'
    }
  }

  componentDidMount() {

  }

  onRouteChange = (route) => {
    if (route === 'signout')
      return this.setState({signedIn: false});
    else
      this.setState({signedIn: true})
    this.setState({route: route})
  }

  render() {

    const { route } = this.state;

    return (
      <div className="App" >
        <Navigation/>
        { (() => {
          if (route === 'signin') {
            return(<SignIn onRouteChange={this.onRouteChange}/>)
          }
          else if (route === 'register') {
            return(<Registration onRouteChange={this.onRouteChange}/>)
          }
          else if (route === 'home') {
            return(<Profile onRouteChange={this.onRouteChange}/>)
          }
        })()}
      </div>
    )
  }
}

export default App;
