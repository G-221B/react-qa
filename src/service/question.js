import request from './request'

// 根据页码和类型获取问题列表
export function getQuestionList (pageNum, type, category) {
  return request.get('/question', {
    params: {
      type,
      pageNum,
      category
    }
  })
}

//获取所有的问题类型
export function getQuestionType () {
  return request.get('/question/type')
}

// 发布问题
export function publishQuestion (user_id, type, title, content) {
  return request.post('/question/publish', {
    user_id,
    type,
    title,
    content
  })
}

// 获取问题的分区
export function getQuestionCategory () {
  return request.get('/question/category')
}

// 搜索问题
export function searchQuestionByKey (key, pageNum = 1) {
  return request.get('/question/search', {
    params: {
      key,
      pageNum
    }
  })
}

// 获取问题详情
export function getQuestionInfo (q_id, user_id) {
  return request.get('/question/info', {
    params: {
      user_id,
      q_id
    }
  })
}

// 获取问题答案
export function getQuestionAnswer (user_id, q_id) {
  return request.get('/question/answer', {
    params: {
      user_id,
      q_id
    }
  })
}

export function changeQuestionView (q_id) {
  return request.post('/question/view', {
    q_id
  })
}