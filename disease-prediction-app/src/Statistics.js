import React from 'react'
import './Statistics.css';
import CreateChart from './Components/CreateChart';
import NavbarHead from './Components/NavbarHead';

class Statistics extends React.Component {

    render() {
        return (
            <>
                <NavbarHead />
                <CreateChart />
            </>
        );
    }

}

export default Statistics;
