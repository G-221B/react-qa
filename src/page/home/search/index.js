import React, { useEffect, useState, useCallback } from 'react'
import { Pagination, message } from 'antd'
import JGNavHeader from '@/components/nav-header'
import JGQuestionList from '@/components/question-list'
import { SearchWrapper } from './style'
import { searchQuestionByKey } from '@/service/question'
import { formatUrlData } from '@/utils'
import { useTitle } from '@/hooks'

export default function JGSearch (props) {
  const [pageNum, setPageNum] = useState(1)
  const [pageCount, setPageCount] = useState(0)
  const [result, setResult] = useState([])
  const search = props.location.search
  const obj = formatUrlData(decodeURIComponent(search))
  const key = obj['key']

  useTitle(`${key}_站内搜索`)
  useEffect(() => {
    async function fetchData () {
      const res = await searchQuestionByKey(key, pageNum)
      if (res.status === 0) {
        setPageCount(res.data.pageCount)
        setResult(res.data.res)
        if (res.data.res.length === 0) {
          message.error({
            style: {
              fontSize: '12px'
            },
            duration: 1,
            content: '暂无相关数据'
          })
        }
      }
    }
    fetchData()
  }, [key, pageNum])
  const changePageNum = useCallback((value) => {
    setPageNum(value)
  }, [])
  return (
    <SearchWrapper className="wrap-v1">
      <JGNavHeader nav_list={[]} title="搜索结果" />
      <JGQuestionList question_list={result} mark={key} />
      <div className="page">
        <Pagination current={pageNum} onChange={changePageNum} total={pageCount * 10} showSizeChanger={false} hideOnSinglePage={true} />
      </div>
    </SearchWrapper>
  )
}
