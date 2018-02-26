import * as React from 'react';


export class Footer extends React.Component<{}, {}> {
    public render() {
        return <div>
            <div className='container-fluid footer'>
                <div className='row'>                  
                    <div className='col-sm-12 col-md-12 col-lg-12'>
                        <p>This is the footer</p>
                    </div>
                </div>
            </div>
        </div>
    }
}
