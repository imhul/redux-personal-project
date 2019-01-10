// Core
import { createStore } from 'redux';

// Reducer
import { rootReducer } from './rootReducer';

// Saga
import { saga } from './saga';

// Middleware
import { enhancedStore, sagaMiddleware } from './middleware/core'

export const store = createStore( rootReducer, enhancedStore );

// Вызывается только после создания store
sagaMiddleware.run(saga);