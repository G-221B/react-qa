import React, { useEffect, useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { Pagination, Modal, message } from 'antd'
import { useTitle } from '@/hooks'
import JGNavHeader from '@/components/nav-header'
import JGQuestionList from '@/components/question-list'
import { getUserQuestion, deleteUserQuestion } from '@/service/user'
import { UserQuestionWrapper } from './style'

export default function JGUserQuestion () {
  const [question_list, setQuestion_list] = useState([])
  const [pageNum, setPageNum] = useState(1)
  const [pageCount, setPageCount] = useState(0)

  const user_id = useSelector(state => state.user.user_id)
  useTitle('我的提问')
  useEffect(() => {
    async function fetchData () {
      const res = await getUserQuestion(user_id, pageNum)
      if (res.status === 0) {
        setPageCount(res.data.pageCount)
        setQuestion_list(res.data.res)
      }
    }
    fetchData()
  }, [user_id, pageNum, pageCount])
  const changePageNum = useCallback((value) => {
    setPageNum(value)
  }, [])
  const deleteEvent = useCallback(async (id) => {
    Modal.confirm({
      title: '提示',
      content: '是否删除该提问?',
      okText: '确认',
      cancelText: '取消',
      onOk: async () => {
        const res = await deleteUserQuestion(user_id, id, false)
        if (res.status === 0) {
          setPageCount(0)
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
  }, [user_id])
  return (
    <UserQuestionWrapper>
      <JGNavHeader nav_list={[]} title="我的提问" />
      <JGQuestionList question_list={question_list} delete={true} deleteEvent={deleteEvent} />
      <div className="page">
        <Pagination current={pageNum} onChange={changePageNum} total={pageCount * 10} showSizeChanger={false} hideOnSinglePage={true} />
      </div>
    </UserQuestionWrapper>
  )
}
