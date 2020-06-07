import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Home from './components/Home/Home'
import Registration from './components/Registration/Registration';
import Stocks from './components/Stocks/Stocks'

const initialState = {
  signedIn: 'false',
  route: 'signin',
  email: "",
  companies: [],
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  /**
   * Loads user's settings
   * 
   * @param {string} email The user's email.
   * @param {Array} companyList The list of companies the user is interested in.
   */
  loadUser = (companyList, email) => {
    this.setState({
      companies: companyList,
      email: email
    })
  }

  /**
   * Updates the list of companies by adding the additional company stock to state and to the backend.
   * 
   * @param {string} company The additional company stock
   */
  addStock = (company) => {
    fetch('/api/update', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                company: company,
                email: this.state.email,
            })
        })
        .then((res) => res.json())
        .catch(console.log)
        .then((stock) => {
            if (stock.name) {
                this.setState({
                  companies: [...this.state.companies, stock],
                })
            }
        });
  }

  /**
   * Changes the state according to what "route" the user is in
   * 
   * @param {string} route The route or page the user is currently on
   */
  onRouteChange = (route) => {
    if (route === 'signout')
    {
      return this.setState(initialState);
    } else if (route === 'home')
    {
      this.setState({signedIn: true});
    }
    this.setState({route: route});
  }

  render() {
    const {route, companies, signedIn} = this.state;

    return (
      <div className="App" >
        <Navigation signedIn={signedIn} onRouteChange={this.onRouteChange}/>
        { (() => {
          switch (route) {
            case 'register': {
              return(<Registration onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>);
            }
            case 'home': {
              return(<Home  companies={companies}/>);
            }
            case 'stocks': {
              return(<Stocks addStock={this.addStock} companiesList={companies}/>)
            }
            default: {
              return(<SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>);
            }
          }
        })() }
      </div>
    )
  }
}

export default App;
