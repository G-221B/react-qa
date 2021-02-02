import request from './request'

export function isLogin () {
  return request.get('/isLogin')
}

//用户登陆
export function userLogin (account, password) {
  return request.post('/user/login', {
    account,
    password,
    userType: 0
  })
}
//根据账号获取用户信息
export function getUserInfo (account) {
  return request.post('/user/account', {
    account
  })
}
//用户注册
export function userRegister ({ name, account, password, sex, email, detail }) {
  return request.post('/user/register', {
    name,
    account,
    password,
    sex,
    email,
    detail
  })
}
// 上传文件
export function uploadFile (file, onUploadProgress) {
  const data = new FormData()
  data.append('file', file)
  return request.post('/user/upload', data, {
    headers: { "content-type": "multipart/form-data" },
    onUploadProgress
  })
}
// 修改问题点赞
export function changeStar (user_id, q_id, star) {
  return request.post('/question/star', {
    user_id,
    q_id,
    star
  })
}
export function changeMark (user_id, q_id, mark) {
  return request.post('/question/mark', {
    user_id,
    q_id,
    mark
  })
}

export function changeAnswerStar (user_id, q_id, a_id, star) {
  console.log(user_id, q_id, a_id, star)
  return request.post('/question/answer/star', {
    user_id,
    a_id,
    q_id,
    star
  })
}

export function replyQuestion (user_id, q_id, content) {
  console.log(user_id, q_id, content)
  return request.post('/question/reply', {
    user_id,
    q_id,
    content
  })
}

export function deleteUserAnswer (user_id, q_id, a_id, best_answer) {
  return request.post('/question/answer/delete', {
    user_id,
    a_id,
    q_id,
    best_answer
  })
}

export function changeTrueAnswer (user_id, q_id, a_id) {
  return request.post('/question/answer/true', {
    user_id,
    q_id,
    a_id
  })
}

export function cancelTrueAnswer (user_id, q_id, a_id) {
  return request.post('/question/answer/cancel', {
    user_id,
    q_id,
    a_id
  })
}

export function changeUserInfo (user_id, avatar, name, sex, email, detail) {
  return request.post('/user/info', {
    user_id,
    avatar,
    name,
    sex,
    email,
    detail
  })
}

export function changeUserPassword (user_id, old_password, new_password) {
  return request.post('/user/password', {
    user_id,
    old_password,
    new_password
  })
}

export function getUserQuestion (user_id, pageNum) {
  return request.get('/user/question', {
    params: {
      user_id,
      pageNum
    }
  })
}
export function getUserMark (user_id, pageNum) {
  return request.get('/user/mark', {
    params: {
      user_id,
      pageNum
    }
  })
}

export function deleteUserQuestion (user_id, q_id) {
  return request.post('/question/delete', {
    user_id,
    q_id
  })
}

