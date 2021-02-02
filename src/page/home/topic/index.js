import React, { useCallback, useState, useEffect } from 'react'
import { Pagination } from 'antd'
import JGQuestionList from '@/components/question-list'
import JGNavHeader from '@/components/nav-header'
import { TopicWrapper } from './style'
import { nav_list } from '@/common/local-data'
import { getQuestionList } from '@/service/question'
import { useTitle } from '@/hooks'

export default function JGTopic (props) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [questionList, setQuestionList] = useState([])
  const [pageNum, setPageNum] = useState(1)
  const [pageCount, setpageCount] = useState(0)

  const id = props.match.params.id
  const title = props.location.state ? props.location.state.title : ''

  useTitle(title)
  useEffect(() => {
    async function fetchData () {
      const res = await getQuestionList(pageNum, nav_list[currentIndex].type, id)
      if (res.status === 0) {
        setQuestionList(res.data.question_list)
        setpageCount(res.data.pageCount)
      }
    }
    fetchData()
  }, [pageNum, currentIndex, id])

  const changePageNum = useCallback((num) => {
    setPageNum(num)
  }, [])
  const changeType = useCallback((index) => {
    setPageNum(1)
    setCurrentIndex(index)
  }, [])
  return (
    <TopicWrapper className="wrap-v1">
      <div className="main">
        <JGNavHeader title={title} nav_list={nav_list} changeCurrentIndex={changeType} currentIndex={currentIndex} />
        <JGQuestionList question_list={questionList} />
        <div className="page">
          <Pagination defaultCurrent={pageNum} onChange={changePageNum} total={pageCount * 10} showSizeChanger={false} hideOnSinglePage={true} />
        </div>
      </div>
    </TopicWrapper>
  )
}
