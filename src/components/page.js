import React, {Component} from 'react';

// importazione dei "sottocomponenti"
import ActionBar from './page/actionbar';
import Banner from './page/banner';
import Graph from './page/graph';
import Integration from './page/integration';
import Report from './page/report';
import TimeTracker from './page/timetracker';

class Page extends Component {

    render() {
        return (
            <div id='myPage' className='flex-grow-1 superlightgrey-bg'>
                <ActionBar />

                <div className='row px-4 py-3'>
                    <div className='col-8'>
                        <Graph />
                        <TimeTracker />
                    </div>

                    <div className='col-4'>
                        <Banner />
                        <Report />
                        <Integration />
                    </div>
                </div>
            </div>
        )
    }
}

export default Page;