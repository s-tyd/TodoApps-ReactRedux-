import React from 'react';
import MainArea from './mainArea';
import SideArea from './sideArea';


export default class App extends React.Component {
    render() {
        return (
            <div className='wrap'>
                <SideArea />
                <MainArea />
            </div>
        )
    }
}