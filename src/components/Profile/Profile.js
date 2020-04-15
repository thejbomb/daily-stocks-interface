import React from 'react';
import { Jumbotron } from 'react-bootstrap';

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {

    return (
      <div>
        <Jumbotron>
        <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
          </p>
        </Jumbotron>    
      </div>
    )
  }
}

export default Profile;