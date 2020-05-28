import React from 'react';
import NavbarHead from './Components/NavbarHead';
import './ShowMore.css'


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
                <h2>{this.disease[0]}</h2>
            </>
        );
    }
}

export default ShowMore;