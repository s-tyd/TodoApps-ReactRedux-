import React from 'react';
import Header from './header.js';
import Footer from './footer.js';


export default class MainArea extends React.Component {
    render() {
        return (
            <div className='main-area'>
                <Header />
                <main className='list-area'>
                    <ul className='todo-list'>
                        <li className='todo-list-item'>Todo1</li>
                        <li className='todo-list-item'>Todo2</li>
                        <li className='todo-list-item'>Todo3</li>
                        <li className='todo-list-item'>Todo4</li>
                    </ul>
                </main>
                <Footer />
            </div>
        )
    }
}

