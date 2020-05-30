import React from 'react';
import './DiseaseNameAndFreq.css';
import { useState } from 'react';


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
            updateDiseaseinfo(data.description);
            console.log(data.description);
        });



    return (
        <>
            <h2>{diseaseName}</h2>
            <p>{diseaseInfo}</p>
        </>
    );
}

export default DiseaseNameAndFreq;

