import * as React from 'react';


export class Footer extends React.Component<{}, {}> {
    public render() {
        return <div>
            <div className='container-fluid footer'>
                <div className="container">
                    <div className="row justify-content-md-center footer-content">
                        <div className="col-2 col-md-2 content2">
                            <a className='social-link' href='https://github.com/drkrieger1'><i className="devicon-github-plain colored icon-social"></i></a>
                            <a className='social-link' href='https://www.linkedin.com/in/erik-plyushko/'><i className="fa fa-linkedin-square icon-social"></i></a>
                         </div>                       
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12 col-md-12 col-lg-6 copyright'>
                            <p>&copy; Copyright 2018 Erik Plyushko</p>
                        </div>
                    </div>
                </div>
            </div>         
        </div>
    }
}
