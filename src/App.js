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
  companies: [],
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (companyList) => {
    this.setState({
      companies: companyList,
    })
  }

  addStock = (company) => {
    fetch('http://localhost:3001/stock', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                company: company,
            })
        })
        .then(res => res.json())
        .catch(console.log)
        .then(stock => {
          console.log(stock)
            if (stock.name) {
                this.setState({
                  companies: [...this.state.companies, stock],
                })
            }
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

    const { route, companies, signedIn } = this.state;

    return (
      <div className="App" >
        <Navigation signedIn={signedIn} onRouteChange={this.onRouteChange}/>
        { (() => {
          
          if (route === 'register') {
            return(<Registration onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>)
          }
          else if (route === 'home') {
            return(<Home  companies={companies}/>)
          }
          else if (route === 'stocks') {
            return(<Stocks addStock={this.addStock} companiesList={companies}/>)
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
