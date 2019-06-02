import { createStore, compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import reducer from '../reducers/reducer'

export default function configureStore() {
    const logger = createLogger();

    const store = createStore(
        reducer,
        compose(
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
            applyMiddleware(logger)
        )
    );

    return store;
}