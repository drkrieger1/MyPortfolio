import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Projects extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <div className='container'>
                <h1>Projects</h1>
                <hr />
                <div className='row top-buffer'>
                    <div className='col-sm-12 col-md-6 col-lg-4 mt-3 project-item'>
                        <div className='card'>
                            <img className='card-img-top' src='http://via.placeholder.com/350x200' alt='Projects alt caption' />
                            <div className='card-block'>
                                <p className='card-text ml-2'>Project caption</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-12 col-md-6 col-lg-4 mt-3 project-item'>
                        <div className='card'>
                            <img className='card-img-top' src='http://via.placeholder.com/350x200' alt='Projects alt caption' />
                            <div className='card-block'>
                                <p className='card-text ml-2'>Project caption</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-12 col-md-6 col-lg-4 mt-3 project-item'>
                        <div className='card'>
                            <img className='card-img-top' src='http://via.placeholder.com/350x200' alt='Projects alt caption' />
                            <div className='card-block'>
                                <p className='card-text ml-2'>Project caption</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-12 col-md-6 col-lg-4 mt-3 project-item'>
                        <div className='card'>
                            <img className='card-img-top' src='http://via.placeholder.com/350x200' alt='Projects alt caption' />
                            <div className='card-block'>
                                <p className='card-text ml-2'>Project caption</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-12 col-md-6 col-lg-4 mt-3 project-item'>
                        <div className='card'>
                            <img className='card-img-top' src='http://via.placeholder.com/350x200' alt='Projects alt caption' />
                            <div className='card-block'>
                                <p className='card-text ml-2'>Project caption</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-12 col-md-6 col-lg-4 mt-3 project-item'>
                        <div className='card'>
                            <img className='card-img-top' src='http://via.placeholder.com/350x200' alt='Projects alt caption' />
                            <div className='card-block'>
                                <p className='card-text ml-2'>Project caption</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </div>
    }
}
