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
        // this.SendData = this.SendData.bind(this);
        this.GetFromFlask = this.GetFromFlask.bind(this);
    }

    async GetFromFlask() {
        let dname = localStorage.getItem("diseaseName");
        console.log(this.symptoms);

        if (dname) {
            dname = JSON.parse(dname);
            this.setState({ dname });
        } else {
            fetch('https://diseasepredtictor.herokuapp.com/getDisease?query=' + this.symptoms)
                .then(response => response.json())
                .then(data => {
                    this.setState({ disease: data.disease });
                    localStorage.setItem("dname", JSON.stringify(dname));
                });
        }
    }

    componentDidMount() {
        this.GetFromFlask();
        if (this.state.disease != null) {
            fetch('https://diseasepredictorapp.herokuapp.com/GetMore?query='+this.state.disease);
            console.log('sent ' + this.state.disease);
        }
    }

    componentDidUpdate() {
        if (this.state.disease != null) {
            fetch('https://diseasepredictorapp.herokuapp.com/GetMore?query='+this.state.disease);
            console.log('sent ' + this.state.disease);
        }
    }

    render() {
        var { disease } = this.state;
        console.log({ disease });
        // this.SendData();

        return (
            <>
                <Container>
                    <Row className="justify-content-md-center predicted">
                        <Col sm="6" md="6" lg="6">
                            Predicted Disease: {this.state.disease}
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}


export default GetDisease;