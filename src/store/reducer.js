import { combineReducers } from 'redux'
import { userReducer } from './user'
import { questionReducer } from './question'

export default combineReducers({
  user: userReducer,
  question: questionReducer
})
