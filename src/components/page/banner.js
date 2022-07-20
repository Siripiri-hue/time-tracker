import React, {Component} from 'react';

// importazione img
import banner from '../../images/banner_rosa.png';

class Banner extends Component {

    render() {
        return (
            <div id='banner' className='container mb-3'>
                <figure>
                    <img src={banner} alt='' />
                </figure>
                <button className='py-1 px-2 rounded-3'>Start tracking</button>
            </div>
        )
    }
}

export default Banner;