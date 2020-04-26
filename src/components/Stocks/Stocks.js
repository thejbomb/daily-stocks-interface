import React from 'react';
import { Card, Button, CardDeck } from 'react-bootstrap';
import { companies } from '../../constants'

const Home = ({companiesList, addStock}) => {

    let watchList = new Set();
    companiesList.forEach((company, index) => {
        watchList.add(company.name);
    });
    let missing = [];
    companies.forEach((name) => {
        if (!watchList.has(name)) {
            missing.push(name);
        }
    })

  let list = missing.map((company, index) => {
        return(
            <div style={{maxWidth: '18rem'}} key={index}>
                <Card border="dark" style={{ width: '10rem' }}>
                <Card.Header as='h6'>{`Stock: ${company}`}</Card.Header>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
                    <Button onClick={() => addStock(company)} size="sm">Add to watchlist</Button>
                </div>
                </Card>
            </div>
        )
      
  })

  return (
    <div style={{paddingTop: '3rem'}}>
      <h2>Stocks list</h2>
        <CardDeck style={{padding: '3rem', paddingBottom: '0rem', flexWrap: 'wrap', width: "100%"}}>
          {list}
        </CardDeck>
    </div>
  )
}

export default Home;