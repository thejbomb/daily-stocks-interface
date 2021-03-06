import React from 'react';
import { 
  Card,
  CardDeck 
} from 'react-bootstrap';

const Home = ({companies}) => {
  let date = new Date();
  date.setHours(9,0,0);

  //formats the company stocks the user is interested in into card components
  let list = companies.map((company, index) => {
    return(
      <div style={{maxWidth: '18rem'}} key={index}>
        <Card border="dark" >
          <Card.Header as="h6">{`Stock: ${company.name}`}</Card.Header>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
            <p>{`Price: $${company.price}`}</p>
          </div>
          <Card.Footer>  {`Last updated: ${date.toDateString()}`} </Card.Footer>
        </Card>
      </div>
    )
  });

  return (
    <div style={{paddingTop: '3rem'}}>
      <h2>Today's prices for your selected stocks!</h2>
        <CardDeck style={{padding: '3rem', paddingBottom: '0rem', flexWrap: 'wrap', width: "100%"}}>
          { list }
        </CardDeck>
    </div>
  );
}

export default Home;