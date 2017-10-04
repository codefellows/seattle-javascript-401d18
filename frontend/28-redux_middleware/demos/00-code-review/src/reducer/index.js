import {combineReducers} from 'redux'
import cardReducer from './card'
import categoryReducer from './category'

export default combineReducers({
  categories: categoryReducer,
  cards: cardReducer,
})