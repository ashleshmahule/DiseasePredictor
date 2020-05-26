import React from 'react';
import NavbarHead from './Components/NavbarHead';
import './Home.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: null
        }
    }

    handleChange = event => {
        this.setState({ username: event.target.value });
    }

    render() {
        return (
            <>
                <NavbarHead />
                <header className="App-header">
                    <h1>Welcome {this.state.username}</h1>
                </header>

                <Form id="form">
                    <Row className="justify-content-md-center">
                        <Col sm="3" md="3" lg="3" >
                            <Form.Group as={Form.Row} controlId="name">
                                <Form.Control onChange={this.handleChange} type="text" placeholder="Enter Your Name" />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>

                <Link to='/DiseasePrediction'>
                    <Button className="gs" variant="light">Get Started</Button>
                </Link>
            </>
        );
    }
}

export default Home;