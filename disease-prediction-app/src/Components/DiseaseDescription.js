import React from 'react';
import './DiseaseDescription.css';
import { useState } from 'react';
import Card from 'react-bootstrap/Card'

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


    const torender = <>
        <Card border="info" className="desc-card">
            <Card.Header  style={{textAlign:'center'}}>Description</Card.Header>
            <Card.Body>
                <Card.Text className="card-text">
                    {desc}
                </Card.Text>
            </Card.Body>
        </Card>
    </>;

    const error = <>
    </>;


    return (
        <>
            {diseaseName === null || '' ? error : torender}
        </>
    );
}




export default DiseaseDescription;