import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleWare from 'redux-saga'
import reducer from './reducer'
import saga from './saga'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddleWare = createSagaMiddleWare()
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(sagaMiddleWare)
))
sagaMiddleWare.run(saga)

export default store