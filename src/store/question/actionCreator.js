import * as type from './constants'

export const changeQuestionLIST = (newVal) => ({
  type: type.CHANGE_QUESTION_LIST,
  newVal
})
export const changeTopList = (newVal) => ({
  type: type.CHANGE_TOP_LIST,
  newVal
})
export const changePageCount = (newVal) => ({
  type: type.CHANGE_PAGE_COUNT,
  newVal
})

export const fetchQuestionList = (pageNum, nav_type) => {
  return {
    type: type.FETCH_QUESTION_LIST,
    pageNum,
    nav_type
  }
}