import React, {Component} from 'react';

// importazione img
import banner from '../images/banner.png';

// importazione dei "sottocomponenti"
import ActionBar from './page/actionbar';
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
                        <figure>
                            <img src={banner} alt='banner' />
                        </figure>
                        <Report />
                        <Integration />

                        <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean venenatis sagittis arcu, quis porttitor turpis fringilla vitae. Ut at posuere arcu, nec consectetur metus. Etiam ac molestie elit. Vivamus at rutrum sapien. Pellentesque volutpat luctus elit ut ultricies. Aenean laoreet nunc vel lorem consequat, sed tristique est sollicitudin. Ut et tristique tortor, id fringilla lectus. Etiam volutpat tincidunt dui nec dapibus. Donec ornare id erat et mollis. In feugiat ligula eu leo interdum, vitae faucibus libero porta. Vestibulum interdum est ut sem venenatis, et rutrum magna faucibus. Nam tincidunt pulvinar orci, ac pharetra quam mollis vel. Donec rutrum tristique orci, non tincidunt augue feugiat rutrum. Ut odio metus, malesuada sed mi id, pellentesque laoreet risus. Phasellus dictum sagittis nisl sed tempus. Nunc in eros ac turpis porttitor vehicula.

Aliquam ornare eros mauris, sollicitudin consectetur sem sagittis ac. Nunc egestas semper vulputate. Curabitur tempor vestibulum vestibulum. Aenean lorem libero, lacinia vel libero sit amet, elementum interdum nibh. Proin eu tempus lorem, vel fermentum velit. Nullam varius augue eu dictum venenatis. Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi aliquet orci a urna tristique facilisis. Proin placerat diam vel dolor congue sollicitudin.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Page;