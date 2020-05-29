import React from 'react';
import NavbarHead from './Components/NavbarHead';
import './ShowMore.css'
import DiseaseNameAndFreq from './Components/DiseaseNameAndFreq';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

class ShowMore extends React.Component {

    constructor(props) {
        super(props);
        this.disease = '';
        this.GetDataFromForm = this.GetDataFromForm.bind(this);
    }

    GetDataFromForm() {
        this.disease = localStorage.getItem("diseaseName");
        console.log(this.disease);
    }

    componentDidMount() {
        this.GetDataFromForm();
    }

    render() {
        return (
            <>
                <NavbarHead />

                <Row className="justify-content-md-center">
                    <Col md="5" sm="5" lg="5">
                    <DiseaseNameAndFreq diseaseName={localStorage.getItem("diseaseName")} />
                    </Col>

                    <Col md="7" sm="7" lg="7">
                    </Col>
                </Row>
            </>
        );
    }
}

export default ShowMore;