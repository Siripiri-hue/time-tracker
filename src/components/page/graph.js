import React, {Component} from 'react';

// importazione img grafico
import barChart from '../../images/timetracker_graph.png';

// importazione icone
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

class Graph extends Component {

    render() {
        return (
            <div id='graph' className='container mb-4'>
                <div className='d-flex justify-content-between align-items-center mb-3'>
                    <h1 className='sectionTitle m-0'>Time Spends on Project</h1>

                    <select name="day" className='whiteBox p-1 border-white grey-text little-text'>
                        <option value="today">Today</option>
                    </select> 
                </div>

                
                <div className='container whiteBox'> {/* TODO grafico */}
                    <div>
                        <div className='col d-flex align-items-center justify-content-end gap-3 little-text fw-lighter grey-text'>
                            <div className='d-inline d-flex align-items-center gap-1'>
                                <span className='little-circle pinkText'><FontAwesomeIcon icon={faCircle} /></span>Project X
                            </div>

                            <div className='d-inline d-flex align-items-center gap-1'>
                                <span className='little-circle greenText'><FontAwesomeIcon icon={faCircle} /></span>Project Y
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col d-flex align-items-center justify-content-center'>
                            <figure><img src={barChart} alt='graph1' /></figure>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Graph;