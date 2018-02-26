import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
        <div className='jumbotron jumbotron-fluid jumbo'>
                <div className='container'>
                    <h1 className='display-4'>Full Stack Web Developer</h1>
                    <p className='lead'>Providing modern web solutions</p>
                </div>
        </div>
                <div className='container-fluid'>
                    <div className='row'>
                    <div className='col-sm-12 col-md-12 col-lg-6 content'>
                        <h1>About</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                            placerat purus nec sapien tempus, a convallis erat rutrum. Pellentesque
                            porttitor auctor urna, id sagittis velit pellentesque id. Nunc vitae diam
                            ultricies, volutpat sapien a, rhoncus ante. Duis blandit libero sit amet justo
                            rhoncus malesuada. Vivamus congue, nibh sit amet mattis lobortis, nunc odio auctor
                            sapien, sit amet congue odio eros id elit. Donec at dignissim sem. Ut consequat ornare fermentum.
                        </p>
                        <hr />
                        <h1>Technologies</h1>                                        
                    </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                    <div className='col-6 col-md-2 content2'>
                            <i className="devicon-csharp-plain colored icon"></i>
                        </div>
                    <div className='col-6 col-md-2 content2'>
                            <i className="devicon-dot-net-plain colored icon"></i>
                        </div>
                    <div className='col-6 col-md-2 content2'>
                            <i className="devicon-javascript-plain colored icon"></i>
                        </div>
                    <div className='col-6 col-md-2 content2'>
                            <i className="devicon-react-original colored icon"></i>
                        </div>
                    <div className='col-6 col-md-2 content2'>
                            <i className="devicon-css3-plain colored icon"></i>
                        </div>
                    <div className='col-6 col-md-2 content2'>
                            <i className="devicon-html5-plain colored icon"></i>
                        </div>                                  
                    </div>
                </div>
        </div>;
    }
}
