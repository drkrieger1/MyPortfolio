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
                        <p>Hello and welcome to my portfolio. My Name is Erik Plyushko and I am
                            the coding ninja your company has been looking for. My development strack
                            is Javascript and C# and I can learn any technology that you may need to strengthen
                            your development team. I served six years in the Washington National Guard as a Bradley
                            Technician and to this day live by the Army values. I enjoy researching new technologies and Space.
                            Feel free to contact me with any project ideas.
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
