import React from 'react';
import NavbarHead from './Components/NavbarHead';
import './ShowMore.css'


class ShowMore extends React.Component {

    constructor(props) {
        super(props);
        this.disease='';
        this.GetDataFromForm=this.GetDataFromForm.bind(this);
    }

    GetDataFromForm() {
        fetch('https://diseasepredictorapp.herokuapp.com/GetMore')
        .then(response => response.json())
        .then(data => {
            console.log(data.data);
            this.disease = data.data;
        });
    }

    componentDidMount() {
        this.GetDataFromForm();
    }

    render() {
        return (
            <>
                <NavbarHead />
                
            </>
        );
    }
}

export default ShowMore;