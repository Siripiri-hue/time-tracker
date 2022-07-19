// componente Navbar verticale a dx, contiene le icone 
import React, {Component} from 'react';

// importazione icone necessarie
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNodes } from '@fortawesome/free-solid-svg-icons';
import { faWindows } from '@fortawesome/free-brands-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faCircleUp } from '@fortawesome/free-regular-svg-icons';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

class Navbar extends Component {
    render() {
        return (
            <div className='myNavbar d-flex flex-column align-center py-5 px-3 justify-content-between'>
                <div className='d-flex flex-column justify-content-between align-center gap-5'>
                    <span className='pinkIcon d-flex justify-content-center'>
                        <FontAwesomeIcon icon={faCircleNodes} />
                    </span>

                    <div className='d-flex flex-column align-center gap-3'>
                        <FontAwesomeIcon icon={faWindows} className='activeIcon icon'/>
                        <FontAwesomeIcon icon={faClock} className='icon'/>
                        <FontAwesomeIcon icon={faCalendar} className='icon'/>
                        <FontAwesomeIcon icon={faCircleUp} className='icon'/>
                        <FontAwesomeIcon icon={faCalendarDays} className='icon'/>
                        <FontAwesomeIcon icon={faGear} className='icon'/>
                    </div>
                </div>

                <span className='plusIcon d-flex justify-content-center p-3 rounded-circle'>
                    <FontAwesomeIcon icon={faPlus} />
                </span>
            </div>
        )
    }
}

export default Navbar;