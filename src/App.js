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

  loadUser = (companyList, email) => {
    this.setState({
      companies: companyList,
      email: email
    })
  }

  addStock = (company) => {
    fetch('http://ec2-18-188-13-49.us-east-2.compute.amazonaws.com/api/update', {
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
