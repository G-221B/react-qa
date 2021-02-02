import React from 'react'
import JGCategoryItem from './item'
import JGNoData from '@/components/no-data'
import { CategoryListWrapper } from './style'

export default function JGCategoryList (props) {
  return (
    <CategoryListWrapper>
      {
        props.category.map(item => {
          return <JGCategoryItem key={item.type_name} item={item} />
        })
      }
      {
        props.category.length === 0 ? <JGNoData /> : ''
      }
    </CategoryListWrapper>
  )
}
