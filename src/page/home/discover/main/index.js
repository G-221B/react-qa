import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Pagination } from 'antd'
import JGNavHeader from '@/components/nav-header'
import JGQuestionList from '@/components/question-list'
import { MainWrapper } from './style'
import { nav_list } from '@/common/local-data'
import { fetchQuestionList } from '@/store/question/actionCreator'

export default function JGMain () {
  const [pageNum, setPageNum] = useState(1) // 页码
  const [currentIndex, setCurrentIndex] = useState(0) // 类别下标
  const question_list = useSelector(state => state.question.question_list) || []
  const pageCount = useSelector(state => state.question.pageCount)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchQuestionList(pageNum, nav_list[currentIndex].type))
  }, [pageNum, currentIndex, dispatch])

  const changeCurrentIndex = useCallback((index) => {
    setPageNum(1)
    setCurrentIndex(index)
  }, [])
  const changePageNum = useCallback((index) => {
    setPageNum(index)
  }, [])
  return (
    <MainWrapper>
      <JGNavHeader title="发现" nav_list={nav_list} currentIndex={currentIndex} changeCurrentIndex={changeCurrentIndex} />
      <JGQuestionList question_list={question_list} />
      <div className="page">
        <Pagination current={pageNum} onChange={changePageNum} total={pageCount * 10} showSizeChanger={false} hideOnSinglePage={true} />
      </div>
    </MainWrapper>
  )
}
