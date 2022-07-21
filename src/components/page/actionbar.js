import React, {Component} from 'react';

// importazione icone
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faShapes } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

class ActionBar extends Component {

    render() {
        return (
            <div id='actionBar' className='d-flex justify-content-between align-items-center px-4 py-3'>
                <div className=''>
                    <h2 className='fs-4 m-0'>Dashboard</h2>
                    <span className='grey-text little-text'>17 January, 2022 <FontAwesomeIcon icon={faChevronDown} /></span>
                </div>

                <div id='searchInput' className='d-flex align-items-center'>
                    <span id='searchIcon'><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                    <input type="text" class="form-control" id="search" name="search" aria-describedby="search-bar" placeholder='Search or type a command' />
                </div>

                <div className='d-flex align-items-center gap-4'>
                    <div className='d-flex align-items-center gap-4 grey-text fs-5'>
                        <FontAwesomeIcon icon={faMessage} className='actionIcon' />
                        <FontAwesomeIcon icon={faShapes} className='actionIcon' />
                        <FontAwesomeIcon icon={faBell} className='actionIcon' />
                    </div>

                    <div id='profile' className='px-3 py-1 rounded-pill border border-secondary d-flex align-items-center gap-2'>
                        <figure className='d-flex align-items-center m-0'>
                            <img src='https://www.absoluteanime.com/clannad/nagisa.jpg' alt='profile-img' />
                        </figure>

                        <div id='name'>
                            <span className='d-block fw-bold little-text'>Stepheni <FontAwesomeIcon icon={faChevronDown} /></span>
                            <span className='grey-text little-text'>Designer</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ActionBar;