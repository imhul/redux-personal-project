// Core
import { applyMiddleware, compose } from 'redux';
// import { createBrowserHistory } from 'history';

// Middleware
// import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import { customThunk } from './custom';
import createSagaMiddleware from 'redux-saga';

const logger = createLogger({
    duration: true,
    collapsed: true,
    colors: {
        title: () =>     '#138bfe',
        prevState: () => '#1c5faf',
        action: () =>    '#149945',
        nextState: () => '#a47104',
        error: () =>     '#ff0005'
    }
});

// const history = createBrowserHistory();
// const routerMiddleware = createRouterMiddleware(history);
const sagaMiddleware = createSagaMiddleware();
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composerEnchancers = __DEV__ && devtools ? devtools : compose;
const middleware = [ customThunk, sagaMiddleware ];

if( __DEV__ ) {
    middleware.push( logger );
}

const enhancedStore = composerEnchancers( applyMiddleware(...middleware) );

export { enhancedStore, sagaMiddleware };
