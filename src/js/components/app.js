import React from 'react';
import SideArea from '../containers/sideArea';
import MainArea from '../containers/mainArea';


export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='wrap'>
                <SideArea />
                <MainArea />
            </div>
        )
    }
}