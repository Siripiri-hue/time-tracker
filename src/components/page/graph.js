import React, {Component} from 'react';

import barChart from '../../images/graph1.png';

class Graph extends Component {

    render() {
        return (
            <div id='graph' className='container mb-3'>
                <h1 className='sectionTitle'>Time Spend on projects</h1>

                {/* <canvas>
                    Qui ci metteremo il grafico in qualche modo
                    //TODO GRAFICO
                </canvas> */}
                <img src={barChart} alt='graph1' />
            </div>
        )
    }
}

export default Graph;