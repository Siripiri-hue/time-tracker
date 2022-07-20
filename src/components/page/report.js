import React, {Component} from 'react';

import graph from '../../images/graph2.png';

class Report extends Component {

    render() {
        return (
            <div className='container mb-3'>
                <h1 className='sectionTitle'>Report</h1>

                {/* <canvas></canvas>  */}
                {/* TODO grafico */}

                <img src={graph} alt='' />
            </div>
        )
    }
}

export default Report;