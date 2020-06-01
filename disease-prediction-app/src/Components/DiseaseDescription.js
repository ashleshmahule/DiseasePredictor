import React from 'react';
import './DiseaseDescription.css';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';


function DiseaseDescription(props) {

    var [desc, updateDesc] = useState('');
    var diseaseName = props.diseaseName;

    fetch('https://diseasepredictorapp.herokuapp.com/getDiseaseInfo?query=' + diseaseName,
        {
            method: 'POST'
        })
        .then(response => response.json())
        .then(data => {
            updateDesc(data.description);
            console.log(data.description);
        });


    const loader = <>
        <Spinner animation="success" variant="danger" />
    </>;

    const torender = <>
        <Card border="info" className="desc-card">
            <Card.Header style={{ textAlign: 'center' }}>Description</Card.Header>
            <Card.Body>
                <Card.Text className="card-text">
                    {desc===null || desc==='' ? loader: desc}
                </Card.Text>
            </Card.Body>
        </Card>
    </>;

    const error = <>
    </>;


    return (
        <>
            {diseaseName === null || diseaseName === '' ? error : torender}
        </>
    );
}




export default DiseaseDescription;