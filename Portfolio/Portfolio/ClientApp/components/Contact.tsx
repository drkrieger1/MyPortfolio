import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Contact extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 col-md-6 col-lg-6'>
                        <h1>Contact Me</h1>
                        <hr />
                        <form>
                            <div className='form-group'>
                                <label>Name</label>
                                <input className='form-control' type='text'></input>
                            </div>

                            <div className='form-group'>
                                <label >phone</label>
                                <input className='form-control' type='phone'></input>
                            </div>

                            <div className='form-group'>
                                <label>Email</label>
                                <input className='form-control' type='email'></input>
                            </div>

                            <div className='form-group'>
                                <label>Message:</label>
                                <textarea className='form-control' value='What are we working on?'></textarea>
                            </div>
                            <button type='submit' className='btn btn-primary'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
    }
}
