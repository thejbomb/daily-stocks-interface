import React from 'react';
import { 
  Card, 
  Form, 
  Col, 
  Row, 
  Button 
} from 'react-bootstrap';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      invalid: false,
    }
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
   * Sends a signin post request to the server
   */
  onSignIn = () => {
    const {email, password} = this.state;
    if (email.includes('@') && email.includes('.') && password.length > 0 ) 
    {
      fetch('http://ec2-18-188-13-49.us-east-2.compute.amazonaws.com/api/signin', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        })
      })
      .then((res) => res.json())
      .catch(console.log)
      .then((data) => {
        if (data === 'wrong credentials') {
          this.setState({invalid: true});
        } else {
          this.props.loadUser(data, this.state.email);
          this.props.onRouteChange('home');
        }
      });
    } else {
      this.setState({invalid: true});
    }
  }

  render() {
    const {onRouteChange} = this.props;
    const {invalid} = this.state;

    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '5rem' }}>
        <Card style={{ width : '40rem' }} >
          <Card.Title> Sign In </Card.Title>
          <Form>
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

            <Form.Group as={Row} >
              <Col sm={{ span: 8, offset: 2 }}>
                { invalid === true ? <Form.Label column style={{color: 'red'}}>Invalid E-mail and/or Password</Form.Label> : <div></div> }
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
                    <Button onClick={() => onRouteChange('register')}>Register</Button>
                    <Button onClick={this.onSignIn}>Sign in</Button>
                </div>
              </Col>
            </Form.Group>
              
          </Form>
        </Card>
      </div>
    )
  }
}

export default SignIn;