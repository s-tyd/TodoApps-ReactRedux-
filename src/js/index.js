import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import ConfigureStore from './store/';


const store = ConfigureStore();

const onChange = (text) => {
    const action = {
        type: 'CHANGE_TEXT',
        text: text
    }
    store.dispatch(action);
}

const render = () => {
    const state = store.getState();

    ReactDOM.render(
        <App />,
        // <MainArea
        //     text={state.text}
        //     onChange={onChange} />,
        document.getElementById('root')
    );
}

render();
store.subscribe(render);