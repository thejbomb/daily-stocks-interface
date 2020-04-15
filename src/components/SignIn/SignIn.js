import React from 'react';
import { Card, Form, Col, Row, Button } from 'react-bootstrap';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value});
    }

    onSignIn = () => {
        this.props.onRouteChange('home');
    }

    render() {
        const { onRouteChange } = this.props;

        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                <Card style={{ width : '40rem' }} >
                    <Card.Title> Sign In </Card.Title>
                    <Form>
                        <Form.Group as={Row} controlId="formEmail">
                            <Form.Label column sm={2}>
                            Email
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control type="email" placeholder="Email" onChange={this.onEmailChange}/>
                            </Col>
                        </Form.Group>
    
                        <Form.Group as={Row} controlId="formPassword">
                            <Form.Label column sm={2}>
                            Password
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control type="password" placeholder="Password" onChange={this.onPasswordChange}/>
                            </Col>
                        </Form.Group>
                        
                        <Form.Group as={Row} controlId="formCheck">
                            <Col sm={{ span: 8, offset: 2 }}>
                            <Form.Check label="Remember me" />
                            </Col>
                        </Form.Group>
    
                        <Form.Group as={Row}>
                            <Col sm={{ span: 8, offset: 2 }}>
                            <Button type="register" onClick={() => onRouteChange('register')}>Register</Button>
                            <Button type="submit" onClick={() => this.onSignIn}>Sign in</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default SignIn;