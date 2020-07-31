import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './GetDisease.css';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


class GetDisease extends Component {
    constructor(props) {
        super(props);
        this.symptoms = props.symp;
        this.data = {};
        this.state = {
            disease: null
        };
        // this.SendData = this.SendData.bind(this);
        this.GetFromFlask = this.GetFromFlask.bind(this);
    }

    async GetFromFlask() {
        console.log(this.symptoms);

        fetch('https://diseasepredtictor.herokuapp.com/getDisease?query=' + this.symptoms)
            .then(response => response.json())
            .then(data => {
                this.setState({ disease: data.disease });
                localStorage.setItem("diseaseName", data.disease);
                localStorage.setItem("drug", data.drug);
                console.log('set');
            });
    }


    render() {
        this.GetFromFlask();
        var { disease } = this.state;
        console.log({ disease });

        const loader = <>
            <Spinner animation="grow" variant="danger" />
        </>;

        var pred = <>
            Predicted Disease: {this.state.disease}
        </>;

        var more = <>
            <Button style={{margin: 4}} className="show-more-btn" as={Link} to="/ShowMore" variant="dark">Know More!</Button>
            <Button style={{margin: 4}} className="show-drug-btn" as={Link} to="/ShowDrug" variant="dark">Check Which Drug May Be Effective</Button>
        </>

        return (
            <>
                <Container>
                    <Row className="justify-content-md-center predicted">
                        <Col sm="10" md="10" lg="10">
                            {this.state.disease === null || this.state.disease === '' ? loader : pred}
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            {this.state.disease === null || this.state.disease === '' ? null : more}
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}


export default GetDisease;