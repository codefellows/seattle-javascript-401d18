import reducer from '../reducer'
import reporter from './redux-reporter'
import thunk from './redux-thunk'
import {createStore, applyMiddleware} from 'redux'

export default () => createStore(reducer, applyMiddleware(thunk, reporter))