import React from 'react'
import { QuestionListWrapper } from './style'
import JGItem from './item'
import JGNoData from '@/components/no-data'

export default function JGQuestionList (props) {
  const { mark = '' } = props // 搜索页面的搜索关键字，用于标红
  return (
    <QuestionListWrapper>
      {
        props.question_list.map(item => {
          return <JGItem
            question={item}
            key={item.q_id}
            mark={mark}
            delete={props.delete}
            deleteEvent={id => props.deleteEvent(id)}
          />
        })
      }
      {
        props.question_list.length === 0 ? <JGNoData /> : ''
      }
    </QuestionListWrapper>
  )
}
