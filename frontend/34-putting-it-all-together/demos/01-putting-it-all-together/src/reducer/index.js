import {combineReducers} from 'redux'
import profile from './profile'
import auth from './auth'
import photos from './photo'

export default combineReducers({
  auth,
  profile,
  photos,
})