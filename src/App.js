import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Home from './components/Home/Home'
import Registration from './components/Registration/Registration';

const initialState = {
  signedIn: 'false',
  route: 'signin',
  companies: [],
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (companyList) => {
    console.log(companyList)
    this.setState({
      companies: companyList,
    })
  }

  onRouteChange = (route) => {
    if (route === 'signout')
    {
      return this.setState(initialState);
    }
    else if (route === 'home')
    {
      this.setState({signedIn: true});
    }
    this.setState({route: route});
  }

  render() {

    const { route, companies } = this.state;

    return (
      <div className="App" >
        <Navigation onRouteChange={this.onRouteChange}/>
        { (() => {
          
          if (route === 'register') {
            return(<Registration onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>)
          }
          else if (route === 'home') {
            return(<Home  companies={companies}/>)
          }
          else {
            return(<SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>)
          }
        })()}
      </div>
    )
  }
}

export default App;
