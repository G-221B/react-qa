import * as type from './constants'
export default function reducer (state, action) {
  switch (action.type) {
    case type.CHANGE_CODE:
      return { ...state, code: action.newVal }
    case type.CHANGE_USER_CODE:
      return { ...state, userCode: action.newVal }
    case type.CHANGE_ACCOUNT:
      return { ...state, account: action.newVal }
    case type.CHANGE_PASSWORD:
      return { ...state, password: action.newVal }
    default:
      return state
  }
}