import React from 'react';
import './DiseaseNameAndFreq.css';


function DiseaseNameAndFreq(props) {
    var diseaseName='';
    diseaseName=props.diseaseName;

    console.log(diseaseName);


    return (
    <h2>{diseaseName}</h2>
    );
}

export default DiseaseNameAndFreq;

