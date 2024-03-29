import React, {Component} from 'react';

// importazione img grafico
import graph from '../../images/report_graph.png';

// importazione icone
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';

class Report extends Component {

    render() {
        return (
            <div className='container mb-4' id='report'>
                <div className='d-flex justify-content-between align-items-center mb-3'>
                    <h1 className='sectionTitle m-0'>Report</h1>

                    <select name="day" className='whiteBox p-1 border-white grey-text little-text'>
                        <option value="weekly">Weekly</option>
                    </select> 
                </div>

                <div className='container whiteBox'> {/* TODO grafico */}
                    <div className='row'>
                        <div className='col-6 d-flex align-items-center justify-content-center'>
                            <figure><img src={graph} alt='' /></figure>
                        </div>

                        <div className='col-6 d-flex flex-column'>
                            {/* prima label */}
                            <div className='d-flex gap-2 mb-2 p-2 rounded-3 pinkBg'>
                                <span className='roundedIcon d-flex justify-content-center align-items-center rounded-circle darkerPinkBg p-2 little-text'>
                                    <FontAwesomeIcon icon={faTag} />
                                </span>

                                <div className='d-flex flex-column'>
                                    <span className='fw-bolder little-text'>Branding</span>
                                    <span className='fw-lighter little-text'>7 Hours</span>
                                </div>
                            </div>

                            {/* seconda label */}
                            <div className='d-flex gap-2 mb-2 p-2 rounded-3 azureBg'>
                                <span className='roundedIcon d-flex justify-content-center align-items-center rounded-circle darkerAzureBg p-2 little-text'>
                                    <FontAwesomeIcon icon={faBriefcase} />
                                </span>

                                <div className='d-flex flex-column'>
                                    <span className='fw-bolder little-text'>Office</span>
                                    <span className='fw-lighter little-text'>3 Hours</span>
                                </div>
                            </div>

                            {/* terza label */}
                            <div className='d-flex gap-2 p-2 rounded-3 greenBg'>
                                <span className='roundedIcon d-flex justify-content-center align-items-center rounded-circle darkerGreenBg p-2 little-text'>
                                    <FontAwesomeIcon icon={faCar} />
                                </span>

                                <div className='d-flex flex-column'>
                                    <span className='fw-bolder little-text'>Transport</span>
                                    <span className='fw-lighter little-text'>4 Hours</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Report;