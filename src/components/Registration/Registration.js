import React from 'react';
import { Card, CardDeck, Form, Col, Row, Button } from 'react-bootstrap';
import { companies } from '../../constants'

class  Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: [],
            password: '',
            email: '',
            decrease: false,
            increase: false
        }
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value});
    }

    onOptionChange = (event) => {
        let next = this.state.selected.concat(event.target.value);
        this.setState({selected: next});
        companies.splice(companies.indexOf(event.target.value), 1);
    }

    onIncChange = () => {
        this.setState({increase: !this.state.increase});
    }

    onDecChange = () => {
        this.setState({decrease: !this.state.decrease});
    }

    onRegister = () => {
        this.props.onRouteChange('home');
    }

    render() {
        const { onRouteChange } = this.props;
        const { selected } = this.state;

        const options = companies.map((company, index) => {
            return(
                <option key={index} id={index}> {company} </option>
            )
        })

        const lists = selected.map((company, index) => {
            return(
                <Card key={index} id={index}> {company} </Card>
            )
        })

        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
                <Card style={{ width : '35rem' }}>
                    <Card.Title> Register </Card.Title>
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

                        <fieldset>
                            <Form.Group as={Row}>
                            <Form.Label as="legend" column sm={2}>
                                Select Stocks
                            </Form.Label>
                            <Col sm={8} >
                            <Form.Control as="select" value="Choose..." onChange={this.onOptionChange} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <option>Choose...</option>
                                {options}
                            </Form.Control>
                            </Col>
                            </Form.Group>
                        </fieldset>

                        <Form.Group as={Row} controlId="formStocks">
                            <Form.Label column sm={2}>
                            Selected
                            </Form.Label>
                            <Col sm={8}>
                            <CardDeck style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                {lists}
                            </CardDeck>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formNotify">
                            <Form.Label column sm={4}>
                            Notify when stocks
                            </Form.Label>
                            <Col sm={4}>
                            <Form.Check 
                                type="switch"
                                id="increase"
                                label="Increased by 50%"
                                onChange={this.onIncChange}
                            />
                            <Form.Check 
                                type="switch"
                                id="decrease"
                                label="Decreased by 50%"
                                onChange={this.onDecChange}
                            />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Col sm={{ span: 8, offset: 2 }}>
                            <Button type="submit" onClick={() => onRouteChange('register')}>Register</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default Registration;