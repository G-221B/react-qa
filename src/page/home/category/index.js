import React, { useEffect, useState } from 'react'
import JGSideBar from '../discover/side-bar'
import JGNavHeader from '../../../components/nav-header'
import JGCategoryList from './category-list'
import { CategoryWrapper } from './style'
import { getQuestionCategory } from '@/service/question'
import { useTitle } from '@/hooks'

export default function JGCategory () {
  const [category, setCategory] = useState([])

  useTitle('问题分区')
  useEffect(() => {
    async function fetchData () {
      const res = await getQuestionCategory()
      if (res.status === 0) {
        setCategory(res.data.category)
      }
    }
    fetchData()
  }, [])
  return (
    <CategoryWrapper className="wrap-v1">
      <div className="main">
        <JGNavHeader nav_list={[]} title="分区" />
        <JGCategoryList category={category} />
      </div>
      <JGSideBar />
    </CategoryWrapper>
  )
}
