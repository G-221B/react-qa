import React, { useEffect, useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { Pagination, message, Modal } from 'antd'
import JGNavHeader from '@/components/nav-header'
import JGQuestionList from '@/components/question-list'
import { getUserMark, changeMark } from '@/service/user'
import { UserMarkWrapper } from './style'
import { useTitle } from '@/hooks'

export default function JGUserMark () {
  const [question_list, setQuestion_list] = useState([])
  const [pageNum, setPageNum] = useState(1)
  const [pageCount, setPageCount] = useState(0)

  const user_id = useSelector(state => state.user.user_id)

  useTitle('我的标注')
  useEffect(() => {
    async function fetchData () {
      const res = await getUserMark(user_id, pageNum)
      if (res.status === 0) {
        setPageCount(res.data.pageCount)
        setQuestion_list(res.data.res)
      }
    }
    fetchData()
  }, [user_id, pageNum])
  const changePageNum = useCallback((value) => {
    setPageNum(value)
  }, [])
  const deleteEvent = useCallback(async (id) => {
    Modal.confirm({
      title: '提示',
      content: '是否删除该标注?',
      okText: '确认',
      cancelText: '取消',
      onOk: async () => {
        const res = await changeMark(user_id, id, false)
        if (res.status === 0) {
          setQuestion_list(question_list.filter(item => item.q_id !== id))
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
  }, [user_id, question_list])
  return (
    <UserMarkWrapper>
      <JGNavHeader nav_list={[]} title="我的标注" />
      <JGQuestionList question_list={question_list} delete={true} deleteEvent={deleteEvent} />
      <div className="page">
        <Pagination current={pageNum} onChange={changePageNum} total={pageCount * 10} showSizeChanger={false} hideOnSinglePage={true} />
      </div>
    </UserMarkWrapper>
  )
}
