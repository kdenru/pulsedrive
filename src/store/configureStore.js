import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { rootReducer, initialState } from './reducer'

const devTools = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : f => f // eslint-disable-line

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    devTools,
  ),
)

export { store }

export default {}
