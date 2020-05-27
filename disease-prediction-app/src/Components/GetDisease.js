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
    }

    componentDidUpdate() {
        fetch('https://diseasepredictorapp.herokuapp.com/GetMore', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "no-cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // no-referrer, *client
            body: JSON.stringify(this.state.disease), // body data type must match "Content-Type" header
        })
        console.log('sent ' + this.state.disease);
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