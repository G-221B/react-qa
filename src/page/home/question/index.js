import React, { useState, useEffect, useCallback } from 'react'
import { useSelector } from 'react-redux'
import JGDetail from './detail'
import JGAnswer from './answer'
import JGReply from './reply'
import { QuestionWrapper } from './style'
import { getQuestionInfo, changeQuestionView } from '@/service/question'
import { changeStar, changeMark } from '@/service/user'
import { remindLogin } from '@/utils'

export default function JGQuestion (props) {
  const [replyFlag, setReplyFlag] = useState(false)
  const [question, setQuestion] = useState({})
  const user_id = useSelector(state => state.user.user_id)
  const id = props.match.params.id

  // 浏览计数功能
  useEffect(() => {
    let t = setTimeout(() => {
      changeQuestionView(id)
    }, 5000)
    return () => {
      clearTimeout(t)
    }
  }, [id])

  // 获取问题详情
  useEffect(() => {
    async function fetchData () {
      const res = await getQuestionInfo(id, user_id)
      if (res.status === 0) {
        const question = res.data.question[0]
        question.star = res.data.star
        question.mark = res.data.mark
        setQuestion(question)
      }
    }
    fetchData()
  }, [user_id, id, replyFlag])

  // 问题点赞
  const question_star = useCallback(() => {
    if (!user_id) {
      return remindLogin()
    }
    if (question.star) {
      setQuestion({ ...question, star: !question.star, star_num: question.star_num - 1 })
    } else {
      setQuestion({ ...question, star: !question.star, star_num: question.star_num + 1 })
    }
    changeStar(user_id, id, !question.star)
  }, [question, user_id, id])
  //问题标注
  const question_mark = useCallback(() => {
    if (!user_id) {
      return remindLogin()
    }
    if (question.mark) {
      setQuestion({ ...question, mark: !question.mark, mark_num: question.mark_num - 1 })
    } else {
      setQuestion({ ...question, mark: !question.mark, mark_num: question.mark_num + 1 })
    }
    changeMark(user_id, id, !question.mark)
  }, [question, user_id, id])

  // 用于刷新答案列表
  const replyFinish = useCallback(() => {
    setReplyFlag(!replyFlag)
  }, [replyFlag])
  return (
    <QuestionWrapper className="wrap-v1">
      <JGDetail
        question={question}
        star={question_star}
        mark={question_mark}
      />
      <JGAnswer
        u_id={question.u_id}
        q_id={id}
        user_id={user_id}
        replyFlag={replyFlag}
      />
      <JGReply
        q_id={id}
        replyFinish={replyFinish}
      />
    </QuestionWrapper>
  )
}
