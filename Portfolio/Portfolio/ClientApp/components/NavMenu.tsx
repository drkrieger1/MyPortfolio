import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <div className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <a className='navbar-brand logo' href='#'>Erik Plyushko</a>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarMobile' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarMobile'>
                <ul className='navbar-nav'>
                    <li className='nav-item active'>                     
                        <NavLink to={'/'} exact activeClassName='active' className='nav-link'>
                            <span className='glyphicon glyphicon-home'></span> Home
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to={'/'} activeClassName='active' className='nav-link disabled'>
                            <span className='glyphicon glyphicon-education'></span> Projects
                        </NavLink>
                    </li>
                    <li className='nav-item'>                
                        <NavLink to={'/'} activeClassName='active' className='nav-link disabled'>
                            <span className='glyphicon glyphicon-th-list'></span> Contact
                        </NavLink>
                    </li>                  
                </ul>
            </div>
        </div>
    }
}
