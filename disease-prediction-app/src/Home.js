import React from 'react';
import NavbarHead from './NavbarHead';
import './Home.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'

function Home() {
    return (
        <>
            <NavbarHead />
            <header className="App-header">
                <h1>Welcome</h1>
            </header>
            <Form id="form">
                <Row className="justify-content-md-center">
                    <Col sm="3" md="3" lg="3" >
                        <Form.Group as={Form.Row} controlId="name">
                            <Form.Control type="text" placeholder="Enter Your Name" />
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </>
    );
}

export default Home;