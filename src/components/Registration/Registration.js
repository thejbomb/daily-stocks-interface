import React from 'react';
import { companies } from '../../constants';
import User from '../../helper/User'
import { 
  Card, 
  CardDeck, 
  Form, 
  Col, 
  Row, 
  Button 
} from 'react-bootstrap';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      email: '',
      selected: [],
      decrease: false,
      increase: false,
      invalid: false,
    }
  }

  /**
   * Saves the input change of the name to state
   * @param event The input change event
   */
  onNameChange = (event) => {
    this.setState({name: event.target.value});
  }

  /**
   * Saves the input change of the email to state
   * @param event The input change event
   */
  onEmailChange = (event) => {
    this.setState({email: event.target.value});
  }

  /**
   * Saves the input change of the password to state
   * @param event The input change event
   */
  onPasswordChange = (event) => {
    this.setState({password: event.target.value});
  }

  /**
   * Saves the input change of the company list to state
   * @param event The input change event
   */
  onOptionChange = (event) => {
    let next = [...this.state.selected, event.target.value];
    this.setState({selected: next});
    companies.splice(companies.indexOf(event.target.value), 1);
  }

  /**
   * Saves the increase boolean (to dictate if user is interested in a price increase) to state
   */
  onIncChange = () => {
    this.setState({increase: !this.state.increase});
  }

  /**
   * Saves the decrease boolean (to dictate if user is interested in a price decrease) to state
   */
  onDecChange = () => {
    this.setState({decrease: !this.state.decrease});
  }

  /**
   * Sends a resgister post request to the server to create a new document in the database
   */
  onRegister = () => {
    const {name, email, password, selected, increase, decrease} = this.state;
    if (email.includes('@') && email.includes('.') && password.length > 0 && selected.length > 0) 
    {
      let newUser = new User(name, email, password, selected, increase, decrease);

      fetch('http://ec2-18-188-13-49.us-east-2.compute.amazonaws.com/api/register', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newUser)
      })
      .then((res) => res.json())
      .catch(console.log)
      .then((companyList) => {
        if (companyList.length > 0) {
          this.props.loadUser(companyList, email);
          this.props.onRouteChange('home');
        }
      })
    } else {
      this.setState({invalid: true});
    }
  }

  render() {
    const {selected, invalid} = this.state;

    const options = companies.map((company, index) => {
      return(
        <option key={index} id={index}> {company} </option>
      )
    });

    const lists = selected.map((company, index) => {
      return(
        <Card key={index} id={index}> {company} </Card>
      )
    });

    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '5rem'}}>
        <Card style={{ width : '35rem' }}>
          <Card.Title> Register </Card.Title>
          <Form>
            <Form.Group as={Row} controlId="formName">
              <Form.Label column sm={2}>Name</Form.Label>
              <Col sm={8}>
              <Form.Control type="name" placeholder="Name" onChange={this.onNameChange}/>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formEmail">
              <Form.Label column sm={2}>Email</Form.Label>
              <Col sm={8}>
              <Form.Control type="email" placeholder="Email" onChange={this.onEmailChange}/>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPassword">
              <Form.Label column sm={2}>Password</Form.Label>
              <Col sm={8}>
              <Form.Control type="password" placeholder="Password" onChange={this.onPasswordChange}/>
              </Col>
            </Form.Group>

            <fieldset>
              <Form.Group as={Row}>
              <Form.Label as="legend" column sm={2}>Select Stocks</Form.Label>
              <Col sm={8} >
              <Form.Control as="select" value="Choose..." onChange={this.onOptionChange} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <option>Choose...</option>
                {options}
              </Form.Control>
              </Col>
              </Form.Group>
            </fieldset>

            <Form.Group as={Row} controlId="formStocks">
              <Form.Label column sm={2}>Selected</Form.Label>
              <Col sm={8}>
              <CardDeck style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                { lists }
              </CardDeck>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formNotify">
              <Form.Label column sm={4}>Notify when stocks</Form.Label>
              <Col sm={4}>
              <Form.Check 
                type='switch'
                id='increase'
                label='Increased by 50%'
                onChange={this.onIncChange}
              />
              <Form.Check 
                type='switch'
                id='decrease'
                label='Decreased by 50%'
                onChange={this.onDecChange}
              />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Col sm={{ span: 8, offset: 2 }}>
              { invalid && <Form.Label column style={{color: 'red'}}>Please fill in everything with valid inputs</Form.Label> }
              <Button onClick={this.onRegister}>Register</Button>
              </Col>
            </Form.Group>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Registration;