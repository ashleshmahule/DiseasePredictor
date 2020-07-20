import './ShowDrug.css';
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

function ShowDrug(props) {
    var [drugName, updateDrugName] = useState('');
    var [drugInfo, updateDrugInfo] = useState('');
    var [drugImg, updateDrugImg] = useState('');

    updateDrugName(localStorage.getItem("drug"));

    fetch("https://diseasepredictorapp.herokuapp.com/getDrugInfo?query=" + drugName)
        .then(response => response.json())
        .then(data => {
            updateDrugInfo(data.info);
            updateDrugImg(data.imgUrl);
        });

    var torender = <>
        <Card>
            
        </Card>
    </>

    return (
        <>
            
        </>
    );
}

export default ShowDrug;