import React from 'react';
import { companies } from '../../constants'
import { 
  Card,
  Button, 
  CardDeck 
} from 'react-bootstrap';

const Home = ({companiesList, addStock}) => {
  let watchList = new Set();
  let missing = [];

  //populates the set with all the company stocks that are added to the user's list
  companiesList.forEach((company, index) => {
    watchList.add(company.name);
  });
  
  //compiles all the company stocks that are not in the user's list
  companies.forEach((name) => {
    if (!watchList.has(name)) {
      missing.push(name);
    }
  });

  //formats all the company stocks that are not in the user's list into card components
  let list = missing.map((company, index) => {
    return(
      <div style={{maxWidth: '18rem'}} key={index}>
          <Card border="dark" style={{ width: '10rem' }}>
          <Card.Header as="h6">{`Stock: ${company}`}</Card.Header>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
            <Button onClick={() => addStock(company)} size="sm">Add to watchlist</Button>
          </div>
          </Card>
      </div>
    )
  });

  return (
    <div style={{paddingTop: '3rem'}}>
      <h2>Stocks list</h2>
        <CardDeck style={{padding: '3rem', paddingBottom: '0rem', flexWrap: 'wrap', width: "100%"}}>
          { list }
        </CardDeck>
    </div>
  );
}

export default Home;