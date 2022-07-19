import React, {Component} from 'react';

// importazione dei "sottocomponenti"
import ActionBar from './page/actionbar';

class Page extends Component {

    render() {
        return (
            <div id='myPage' className='flex-grow-1 superlightgrey-bg'>
                <ActionBar />

                <div className='row px-4 py-3'>
                    <div className='col-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus augue risus, semper non libero in, consectetur convallis velit. Vestibulum dictum consequat facilisis. Ut ornare tristique ex, ac rutrum ligula tempor nec. In pulvinar ante ut nulla feugiat vulputate. Morbi vitae dui fermentum, mattis augue at, luctus dolor. Morbi orci quam, interdum sed turpis ultrices, tempor pretium sapien. Nullam ut magna eget mauris aliquet ullamcorper. Cras egestas faucibus risus, et consequat augue ullamcorper in. Vivamus egestas, augue vitae gravida dapibus, libero elit hendrerit sapien, non mattis justo sapien sit amet tellus.
                    </div>

                    <div className='col-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus augue risus, semper non libero in, consectetur convallis velit. Vestibulum dictum consequat facilisis. Ut ornare tristique ex, ac rutrum ligula tempor nec. In pulvinar ante ut nulla feugiat vulputate. Morbi vitae dui fermentum, mattis augue at, luctus dolor. Morbi orci quam, interdum sed turpis ultrices, tempor pretium sapien. Nullam ut magna eget mauris aliquet ullamcorper. Cras egestas faucibus risus, et consequat augue ullamcorper in. Vivamus egestas, augue vitae gravida dapibus, libero elit hendrerit sapien, non mattis justo sapien sit amet tellus.
                    </div>
                </div>
            </div>
        )
    }
}

export default Page;