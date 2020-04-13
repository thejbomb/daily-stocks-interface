import React from 'react';
import { Card, Form, Col, Row, Button } from 'react-bootstrap';

const SignIn = () => {
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
                        <Form.Control type="email" placeholder="Email" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPassword">
                        <Form.Label column sm={2}>
                        Password
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>
                    
                    <Form.Group as={Row} controlId="formCheck">
                        <Col sm={{ span: 8, offset: 2 }}>
                        <Form.Check label="Remember me" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm={{ span: 8, offset: 2 }}>
                        <Button type="register">Register</Button>
                        <Button type="submit">Sign in</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </Card>
        </div>
    )
}

export default SignIn;