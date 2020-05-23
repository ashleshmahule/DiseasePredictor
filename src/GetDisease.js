import React, { Component } from 'react';

class GetDisease extends Component {
    constructor(props) {
        super(props);
        this.symptoms = props.symp;
        this.data = {};
        this.state = {
            disease: null
        };
    }

    async GetFromFlask() {
        fetch('https://diseasepredtictor.herokuapp.com/getDisease?query=' + this.symptoms)
            .then(response => response.json())
            .then(data => this.setState({ disease: data.disease }));
    }

    render() {
        this.GetFromFlask();
        const { disease } = this.state;
        console.log({disease});

        return (<div className="card text-center m-3">
            
            <div className="card-body">
                Predicted Disease: {disease}
            </div>
        </div>
        );
    }
}





export default GetDisease;