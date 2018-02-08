import  rootReducer  from '../reducers/rootReducer'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'

const enhancer = applyMiddleware(thunk, logger)
const store = createStore(rootReducer, composeWithDevTools(enhancer))

export default store