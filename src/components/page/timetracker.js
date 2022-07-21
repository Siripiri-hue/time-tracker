import React, {Component} from 'react';

// importazione icone
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import { faPenFancy } from '@fortawesome/free-solid-svg-icons';
import { faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

class TimeTracker extends Component {

    render() {
        return (
            <div className='container mb-4' id='timeTracker'>
                <div className='d-flex justify-content-between align-items-center mb-3'>
                    <h1 className='sectionTitle m-0'>Time Tracker</h1>

                    <div className='d-flex justify-content-center align-items-center gap-2'>
                        <select name="day" className='whiteBox p-1 border-white grey-text little-text'>
                            <option value="today">Today</option>
                        </select>

                        <span className='whiteBox grey-text py-1 px-2'><FontAwesomeIcon icon={faFilter} /></span>   
                    </div>
                </div>
            
                {/* row 1 */}
                <div className='row whiteBox mb-3 d-flex align-items-center'>
                    <div className='col-4 d-flex gap-2 flex-grow-1'>
                        <span className='roundedIcon d-flex justify-content-center align-items-center rounded-circle azureBg p-3'>
                            <FontAwesomeIcon icon={faWrench} />
                        </span>
                        <div className='d-flex flex-column'>
                            <span className='fw-bolder'>Fixing Bug</span>
                            <span className='fw-lighter'>Project X</span>
                        </div>
                    </div>

                    <div className="col-2">
                        <span className='pe-2'><FontAwesomeIcon icon={faDollarSign} /></span><span className='grey-text'>Billing</span>
                    </div>

                    <div className="col-3 d-flex gap-2 align-items-center">
                        <span className='roundedIcon d-flex align-items-center justify-content-center rounded-circle azureBg p-3'><FontAwesomeIcon icon={faClock} /></span>
                        <span>3.00 - 3.30 PM</span>
                    </div>
                    <div className="col-2">0.30 m</div>

                    <div className="col-1 d-flex gap-3 justify-content-end grey-text">
                        <FontAwesomeIcon icon={faCirclePlay} />
                        <FontAwesomeIcon icon={faEllipsis} />
                    </div>
                </div>

                {/* row 2 */}
                <div className="row whiteBox mb-3 d-flex align-items-center">
                    <div className="col-4 d-flex gap-2 flex-grow-1">
                        <span className='roundedIcon d-flex justify-content-center align-items-center rounded-circle greenBg p-3'>
                            <FontAwesomeIcon icon={faPenFancy} />
                        </span>
                        <div className='d-flex flex-column'>
                            <span className='fw-bolder'>Illustration</span>
                            <span className='fw-lighter'>Acme</span>
                        </div>
                    </div>

                    <div className="col-2">
                    <span className='pe-2'><FontAwesomeIcon icon={faDollarSign} /></span><span className='grey-text'>Billing</span>
                    </div>

                    <div className="col-3 d-flex gap-2 align-items-center">
                        <span className='roundedIcon d-flex align-items-center justify-content-center rounded-circle greenBg p-3'><FontAwesomeIcon icon={faClock} /></span>
                        <span>4.00 - 4.30 PM</span>
                    </div>
                    <div className="col-2">0.30 m</div>
                    <div className="col-1 d-flex gap-3 justify-content-end grey-text">
                        <FontAwesomeIcon icon={faCirclePlay} />
                        <FontAwesomeIcon icon={faEllipsis} />
                    </div>
                </div>

                {/* row 3 */}
                <div className="row whiteBox mb-3 d-flex align-items-center">
                    <div className="col-4 d-flex gap-2 flex-grow-1">
                        <span className='roundedIcon d-flex justify-content-center align-items-center rounded-circle pinkBg p-3'>
                            <FontAwesomeIcon icon={faFileInvoiceDollar} /> 
                        </span>
                        <div className='d-flex flex-column'>
                            <span className='fw-bolder'>Filling Tax Return</span>
                            <span className='fw-lighter'>Office</span>
                        </div>
                    </div>

                    <div className="col-2">
                    <span className='pe-2'><FontAwesomeIcon icon={faDollarSign} /></span><span className='grey-text'>Billing</span>
                    </div>

                    <div className="col-3 d-flex gap-2 align-items-center">
                        <span className='roundedIcon d-flex align-items-center justify-content-center rounded-circle pinkBg p-3'><FontAwesomeIcon icon={faClock} /></span>
                        <span>5.00 - 5.30 PM</span>
                    </div>
                    <div className="col-2">0.30 m</div>

                    <div className="col-1 d-flex gap-3 justify-content-end grey-text">
                        <FontAwesomeIcon icon={faCirclePlay} />
                        <FontAwesomeIcon icon={faEllipsis} />
                    </div>
                </div>
            </div>
        )
    }
}

export default TimeTracker;