import React from 'react';
import './DiseaseNameAndFreq.css';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';



function DiseaseNameAndFreq(props) {
    var diseaseName = '';
    var [diseaseInfo, updateDiseaseinfo] = useState('');
    var [diseaseImg, updateDiseaseImg] = useState('');

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
            updateDiseaseImg(data.imgUrl);
            console.log(data.freq);
        });

    const loader = <>
        <Spinner animation="success" variant="danger" />
    </>;

    const torender = <>
        <Card
            bg='info'
            text='dark'
            className="name-card"
        >
            <Card.Img variant="top" src={diseaseImg} />
            <Card.Header style={{ textAlign: 'center' }}>{diseaseName} (Image)</Card.Header>

            <Card.Body>
                <Card.Text>
                    {diseaseInfo === null || diseaseInfo === '' ? loader : diseaseInfo}
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

export default DiseaseNameAndFreq;

