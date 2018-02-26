import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
        <div className='jumbotron jumbotron-fluid jumbo'>
                <div className='container'>
                    <h1 className='display-4'>Full Stack Web Development</h1>
                    <p className='lead'>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </div>
        </div>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-12 col-md-12 col-lg-6'>
                        <h1>About</h1>
                        <p>Mustache 8-bit green juice cliche humblebrag unicorn. Scenester hoodie
                            wayfarers fingerstache, helvetica forage live-edge viral squid iceland
                            crucifix copper mug. Godard yuccie forage chillwave craft beer. DIY salvia
                            street art, affogato umami actually paleo keffiyeh 90's wolf gastropub selvage
                            pop-up flannel.
                        </p>
                        </div>
                     </div>
                </div>
        </div>;
    }
}
