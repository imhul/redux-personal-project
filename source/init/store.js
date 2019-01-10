// Core
import { createStore } from 'redux';

// Reducer
import { rootReducer } from './rootReducer';

// Saga
import { rootSaga } from './rootSaga';

// Middleware
import { enhancedStore, sagaMiddleware } from './middleware/core'

export const store = createStore( rootReducer, enhancedStore );

// Вызывается только после создания store
sagaMiddleware.run( rootSaga );