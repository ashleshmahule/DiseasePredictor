import React from 'react';
import './DiseaseNameAndFreq.css';
import { useState } from 'react';
import Card from 'react-bootstrap/Card'


function DiseaseNameAndFreq(props) {
    var diseaseName = '';
    var [diseaseInfo, updateDiseaseinfo] = useState('');

    diseaseName = props.diseaseName;
    console.log(props.diseaseName);
    console.log(diseaseName);

    fetch('https://diseasepredictorapp.herokuapp.com/getDiseaseInfo?query=' + diseaseName,
        {
            method: 'POST'
        })
        .then(response => response.json())
        .then(data => {
            updateDiseaseinfo(data.freq);
            console.log(data.freq);
        });

    const torender = <>
        <Card
            bg='info'
            style={{ width: '50%' }}
            text='dark'
            className="name-card"
        >
            <Card.Header  style={{textAlign:'center'}}>{diseaseName}</Card.Header>
            <Card.Body>
                <Card.Text>
                    {diseaseInfo}
                </Card.Text>
            </Card.Body>
        </Card>
    </>;

    const error=<>
    </>;

    return (
        <>
            {diseaseName===null || '' ? error:torender}
        </>
    );
}

export default DiseaseNameAndFreq;

