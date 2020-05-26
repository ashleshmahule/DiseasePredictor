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

    render() {
        this.GetFromFlask();
        const { disease } = this.state;
        console.log({ disease });

        if(disease!=null) {
            disease=disease.replace('_',' ')
        }

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