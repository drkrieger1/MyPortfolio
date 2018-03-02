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
                            <div className='card-img-overlay project-overlay'>
                                <h1 className='card-title ml-2'>StickerFire</h1>
                                <p className='card-text'>This application is croud funding platform for stricker creatores.</p>
                                <a className='btn  btn-primary ' href='https://github.com/StickerFire/StickerFire'>Git Repo</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-12 col-md-6 col-lg-4 mt-3 project-item'>
                        <div className='card'>
                            <img className='card-img-top' src={('/img/Offshore.jpg')} alt='Image of Offshore' />
                            <div className='card-img-overlay project-overlay'>
                                <h1 className='card-title ml-2'>Offshore</h1>
                                <p className='card-text'>A universal ID card application for commercial fishermen.</p>
                                <a className='btn  btn-primary ' href='https://github.com/drkrieger1/fisher-registration'>Git Repo</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-12 col-md-6 col-lg-4 mt-3 project-item'>
                        <div className='card'>
                            <img className='card-img-top' src={('/img/Pacific.jpg')} alt='Image of Pacific Quality Construction' />
                            <div className='card-img-overlay project-overlay'>
                                <h1 className='card-title ml-2'>PQ Construction</h1>
                                <p className='card-text'>Landing page for Pacific Quality Construction.</p>
                                <a className='btn  btn-primary ' href='http://www.pqconstruction.us/'>Visit Site</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-12 col-md-6 col-lg-4 mt-3 project-item'>
                        <div className='card'>
                            <img className='card-img-top' src={('/img/Auto.jpg')} alt='Image of Auto Inspector' />
                            <div className='card-img-overlay project-overlay'>
                                <h1 className='card-title ml-2'>Auto Inspector</h1>
                                <p className='card-text'>This application allows automotive shops to perform quick vehicle inspections.</p>
                                <a className='btn  btn-primary ' href='https://github.com/drkrieger1/AutoInspectorsApp'>Git Repo</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-12 col-md-6 col-lg-4 mt-3 project-item'>
                        <div className='card'>
                            <img className='card-img-top' src={('/img/Gross.jpg')} alt='Image of Is It Gross' />
                            <div className='card-img-overlay project-overlay'>
                                <h1 className='card-title ml-2'>Is It Gross</h1>
                                <p className='card-text'>An application that uses King county's API to show local health inspection results in Seattle.</p>
                                <a className='btn  btn-primary ' href='https://github.com/MattStClair/restaurantRiskRating'>Git Repo</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-12 col-md-6 col-lg-4 mt-3 project-item'>
                        <div className='card'>
                            <img className='card-img-top' src={('/img/DuckTimer.jpg')} alt='Image of Duck Timer' />
                            <div className='card-img-overlay project-overlay'>
                                <h1 className='card-title ml-2'>Duck Timer</h1>
                                <p className='card-text'>An application intended to help programmers to stick to the 15 minute rule when stuck on a problem.</p>
                                <a className='btn  btn-primary ' href='https://github.com/drkrieger1/Duck-Timer'>Git Repo</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </div>
    }
}
