import * as type from './constants'
const defaultValue = {
  question_list: [],
  pageCount: 0,
  top_list: [],
}

export default function useReducer (state = defaultValue, action) {
  switch (action.type) {
    case type.CHANGE_QUESTION_LIST:
      return { ...state, question_list: action.newVal }
    case type.CHANGE_TOP_LIST:
      return { ...state, top_list: action.newVal }
    case type.CHANGE_PAGE_COUNT:
      return { ...state, pageCount: action.newVal }
    default:
      return state
  }
}