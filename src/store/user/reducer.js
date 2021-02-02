import * as type from './constants'
const defaultValue = {
  user_id: '',
  account: ''
}

export default function useReducer (state = defaultValue, action) {
  switch (action.type) {
    case type.CHANGE_USER_ACCOUNT:
      return { ...state, account: action.newVal }
    case type.CHANGE_USER_ID:
      return { ...state, user_id: action.newVal }
    default:
      return state
  }
}