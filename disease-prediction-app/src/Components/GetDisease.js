import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './GetDisease.css';


class GetDisease extends Component {
    constructor(props) {
        super(props);
        this.symptoms = props.symp;
        this.data = {};
        this.state = {
            disease: null
        };
    }

    async GetFromFlask() {
        fetch('https://diseasepredtictor.herokuapp.com/getDisease?query=' + this.symptoms)
            .then(response => response.json())
            .then(data => this.setState({ disease: data.disease }));
    }

    SendData() {
        return fetch('https://diseasepredictorapp.herokuapp.com/ShowMore', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstParam: this.state,
                secondParam: null,
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                return responseJson.success;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        this.GetFromFlask();
        var { disease } = this.state;
        console.log({ disease });
        this.SendData();

        return (
            <>
                <Container>
                    <Row className="justify-content-md-center predicted">
                        <Col sm="6" md="6" lg="6">
                            Predicted Disease: {disease}
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}





export default GetDisease;