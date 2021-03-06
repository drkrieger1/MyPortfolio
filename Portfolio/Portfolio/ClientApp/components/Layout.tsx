import * as React from 'react';
import { NavMenu } from './NavMenu';
import { Footer } from './Footer';

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {}> {
    public render() {
        return<div className='projectr-container'>
            <div className='header'>
                <NavMenu />
            </div>
            <div className='body'>
                <div className='row'>
                    <div className='col-sm-12 col-md-12 col-lg-12'>
                        {this.props.children}
                    </div>
                </div>
            </div>
            <div className='footer'>
                <Footer />
            </div>           
        </div>
    }
}
