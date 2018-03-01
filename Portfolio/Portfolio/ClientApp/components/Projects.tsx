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
                            <img className='card-img-top' src={('/img/StickerFire.jpg')} alt='Image of StickerFire' />
                            <div className='card-block'>
                                <p className='card-text ml-2'>StickerFire</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-12 col-md-6 col-lg-4 mt-3 project-item'>
                        <div className='card'>
                            <img className='card-img-top' src={('/img/Offshore.jpg')} alt='Image of Offshore' />
                            <div className='card-block'>
                                <p className='card-text ml-2'>Offshore</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-12 col-md-6 col-lg-4 mt-3 project-item'>
                        <div className='card'>
                            <img className='card-img-top' src={('/img/Pacific.jpg')} alt='Image of Pacific Quality Construction' />
                            <div className='card-block'>
                                <p className='card-text ml-2'>Pacific Quality Construction</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-12 col-md-6 col-lg-4 mt-3 project-item'>
                        <div className='card'>
                            <img className='card-img-top' src={('/img/Auto.jpg')} alt='Image of Auto Inspector' />
                            <div className='card-block'>
                                <p className='card-text ml-2'>Auto Inspector</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-12 col-md-6 col-lg-4 mt-3 project-item'>
                        <div className='card'>
                            <img className='card-img-top' src={('/img/Gross.jpg')} alt='Image of Is It Gross' />
                            <div className='card-block'>
                                <p className='card-text ml-2'>Is It Gross</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-12 col-md-6 col-lg-4 mt-3 project-item'>
                        <div className='card'>
                            <img className='card-img-top' src={('/img/DuckTimer.jpg')} alt='Image of Duck Timer' />
                            <div className='card-block'>
                                <p className='card-text ml-2'>Duck Timer</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </div>
    }
}
