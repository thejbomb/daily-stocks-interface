import React from 'react';
import { Card, Form, Col, Row, Button } from 'react-bootstrap';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value});
    }

    onSignIn = () => {
        fetch('http://localhost:3001/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(res => res.json())
        .catch(console.log)
        .then(companyList => {
            if (companyList.length > 0) {
                this.props.loadUser(companyList);
                this.props.onRouteChange('home');
            }
        })
    }

    render() {
        const { onRouteChange } = this.props;

        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '5rem' }}>
                <Card style={{ width : '40rem' }} >
                    <Card.Title> Sign In </Card.Title>
                    <Form>
                        <Form.Group as={Row} controlId="formEmail">
                            <Form.Label column sm={2}>
                            Email
                            </Form.Label>
                            <Col sm={8}>
                            <Form.Control type="email" placeholder="Email" onChange={this.onEmailChange}/>
                            </Col>
                        </Form.Group>
    
                        <Form.Group as={Row} controlId="formPassword">
                            <Form.Label column sm={2}>
                            Password
                            </Form.Label>
                            <Col sm={8}>
                            <Form.Control type="password" placeholder="Password" onChange={this.onPasswordChange}/>
                            </Col>
                        </Form.Group>
    
                        <Form.Group as={Row} >
                            <Col sm={{ span: 8, offset: 2 }}>
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