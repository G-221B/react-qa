import React from 'react'
import { NoDataWrapper } from './style'

export default function JGNoData (props) {
  return (
    <NoDataWrapper>
      {props.title ? props.title : '没有更多数据了...'}
    </NoDataWrapper>
  )
}
