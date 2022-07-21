import React, {Component} from 'react';

// importazione immagini loghi
import slack from '../../images/logo_slack.png';
import notion from '../../images/logo_notion.png';

class Integration extends Component {

    render() {
        return (
            <div id='integration'className='container mb-4'>
                <h1 className='sectionTitle mb-3'>Integration</h1>

                <div className='container whiteBox px-4'>
                    <div className='row whiteBox mb-3'>
                        <div className='d-flex justify-content-between align-items-center mb-1 px-1'>
                            <figure className='logoFigure mb-0'><img src={slack} alt='' /></figure>
                            <button className='connected'>Connected</button>
                        </div>

                        <div className='grey-text little-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a sollicitudin enim. Proin quis pretium.</div>
                    </div>

                    <div className='row whiteBox'>
                        <div className='d-flex justify-content-between align-items-center mb-1 '>
                            <figure className='logoFigure mb-0'><img src={notion} alt='' /></figure>
                            <button className='connect'>Connect</button>
                        </div>

                        <div className='grey-text little-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a sollicitudin enim. Proin quis pretium.</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Integration;