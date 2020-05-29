import React from 'react';
import NavbarHead from './Components/NavbarHead';
import './ShowMore.css'
import DiseaseNameAndFreq from './Components/DiseaseNameAndFreq';

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
                <DiseaseNameAndFreq diseaseName={localStorage.getItem("diseaseName")} />
            </>
        );
    }
}

export default ShowMore;