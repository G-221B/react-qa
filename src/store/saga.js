import { all, put, takeEvery } from 'redux-saga/effects'
import { getQuestionList } from '@/service/question'
import { changeQuestionLIST, changeTopList, changePageCount } from './question/actionCreator'
import * as type from './question/constants'

function* fetchQuestionList (action) {
  const res = yield getQuestionList(action.pageNum, action.nav_type)
  if (action.nav_type !== 'hot') {
    yield all([
      put(changeQuestionLIST(res.data.question_list || [])),
      put(changePageCount(res.data.pageCount))
    ])
  } else {
    yield all([
      put(changeTopList(res.data.question_list))
    ])
  }
}

function* mySaga () {
  yield takeEvery(type.FETCH_QUESTION_LIST, fetchQuestionList)
}

export default mySaga