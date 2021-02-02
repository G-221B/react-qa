import React, { useState, useEffect, useCallback } from 'react'
import { Modal, message } from 'antd'
import JGNavHeader from '@/components/nav-header'
import JGAnswerList from './answer-list'
import { AnswerWrapper } from './style'
import JGNoData from '@/components/no-data'
import { getQuestionAnswer } from '@/service/question'
import { changeAnswerStar, deleteUserAnswer, changeTrueAnswer, cancelTrueAnswer } from '@/service/user'
import { remindLogin } from '@/utils'
import { useTitle } from '@/hooks'

export default function JGAnswer (props) {
  const [answer, setAnswer] = useState([]) //答案list
  const [best_answer, setBest_answer] = useState() // 最佳回答
  const [best_index, setBest_index] = useState(-1) // 最佳回答的下标

  useTitle('查看问题')

  // 获取答案
  useEffect(() => {
    async function fetchData () {
      const res = await getQuestionAnswer(props.user_id, props.q_id)
      if (res.status === 0) {
        res.data.answerList.some((item, index) => {
          if (item.resolve === 1) {
            setBest_answer(item)
            setBest_index(index)
            return true
          } else {
            return false
          }
        })
        if (best_index !== -1) {
          res.data.answerList.splice(best_index, 1)
        }
        setAnswer(res.data.answerList)
      }
    }
    fetchData()
  }, [props.user_id, props.q_id, props.replyFlag, best_index])

  // 答案点赞
  const answer_star = useCallback((a_id, i) => {
    if (!props.user_id) {
      return remindLogin()
    }
    const copy_answer = Array.prototype.slice.call(answer)
    if (answer[i].star) {
      copy_answer[i].star = false
      copy_answer[i].star_num -= 1
    } else {
      copy_answer[i].star = true
      copy_answer[i].star_num += 1
    }
    setAnswer(copy_answer)
    changeAnswerStar(props.user_id, props.q_id, a_id, copy_answer[i].star)
  }, [answer, props.user_id, props.q_id])

  // 删除回答
  const deleteAnswer = useCallback((a_id) => {
    Modal.confirm({
      title: '提示',
      content: '是否删除该回答?',
      okText: '确认',
      cancelText: '取消',
      onOk: async () => {
        // 
        let best_flag = false
        const index = answer.findIndex(item => item.a_id === a_id)
        if (index === -1) {
          best_flag = true
        }
        const res = await deleteUserAnswer(props.user_id, props.q_id, a_id, best_flag)
        if (res.status === 0) {
          setAnswer(answer.filter(item => item.a_id !== a_id))
          if (best_answer && a_id === best_answer.a_id) {
            setBest_answer()
          }
          message.success({
            style: {
              fontSize: '12px'
            },
            duration: 1,
            content: '删除成功'
          })
        }
      }
    })
  }, [props.user_id, props.q_id, answer, best_answer])

  // 设置正确答案
  const setTrueAnswer = useCallback((a_id) => {
    Modal.confirm({
      title: '提示',
      content: '是否设置该回答为正确答案?',
      okText: '确认',
      cancelText: '取消',
      onOk: async () => {
        const res = await changeTrueAnswer(props.user_id, props.q_id, a_id)
        if (res.status === 0) {
          // 1.在answer里找出正确答案
          // 2.在answer里过滤掉拿项
          // 3.设置best_anser
          let copy_answer = answer
          const index = copy_answer.findIndex(item => item.a_id === a_id)
          if (index !== -1) {
            setBest_index(index)
            setBest_answer(copy_answer[index])
          }
          copy_answer = copy_answer.filter(item => item.a_id !== a_id)
          if (best_answer) {
            copy_answer.unshift(best_answer)
          }
          setAnswer(copy_answer)

          message.success({
            style: {
              fontSize: '12px'
            },
            duration: 1,
            content: '设置成功'
          })
        }
      }
    })
  }, [answer, best_answer, props.q_id, props.user_id])

  // 取消正确答案
  const cancel = useCallback((a_id) => {
    Modal.confirm({
      title: '提示',
      content: '是否取消该回答为正确答案?',
      okText: '确认',
      cancelText: '取消',
      onOk: async () => {
        const res = await cancelTrueAnswer(props.user_id, props.q_id, a_id)
        if (res.status === 0) {
          // 1.将best_answer加入正常答案里
          // 2.将best_answer设置为null
          const copy_answer = Array.prototype.slice.call(answer)
          if (best_answer) {
            copy_answer.unshift(best_answer)
          }
          setAnswer(copy_answer)
          setBest_answer()
          message.success({
            style: {
              fontSize: '12px'
            },
            duration: 1,
            content: '取消成功'
          })
        }
      }
    })
  }, [answer, best_answer, props.q_id, props.user_id])
  return (
    <AnswerWrapper>
      <JGNavHeader nav_list={[]} title="回答" />
      <JGAnswerList
        answer={answer}
        star={answer_star}
        best_answer={best_answer}
        best_index={best_index}
        showBtn={props.user_id === props.u_id}
        user_id={props.user_id}
        delete={deleteAnswer}
        setTrueAnswer={setTrueAnswer}
        cancelTrueAnswer={cancel}
      />
      {answer.length === 0 ? <JGNoData title="赶紧来回答吧..." /> : ''}
    </AnswerWrapper>
  )
}
