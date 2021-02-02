import React from 'react'
import { NavLink } from 'react-router-dom'
import { ItemWrapper } from './style'
import { formatDate, markKey } from '@/utils'

export default function JGItem (props) {
  const { question, mark = '' } = props
  return (
    <ItemWrapper>
      <div className="left">
        <NavLink
          to={`/home/question/${question.q_id}`}
          className="title text-nowrap"
          dangerouslySetInnerHTML={{ __html: markKey(question.q_title, mark) }}
        >
        </NavLink>
        <span className="type"  >{question.type_name}</span>
        <div className="detail">
          <span>提问者: {question.username}</span>
          <span>{question.mark_num}人标注</span>
          <span>{formatDate(question.q_time)}</span>
        </div>
      </div>
      <div className="right">
        <div className="view box">
          <div className="view-count">{question.star_num}</div>
          <span>点赞</span>
        </div>
        <div className="reply box">
          <div className="reply-count">{question.reply_num}</div>
          <span>回复</span>
        </div>
        <div className="view box">
          <div className="view-count">{question.view_num}</div>
          <span>浏览</span>
        </div>
      </div>
      {props.delete
        &&
        <div className="delete" onClick={e => props.deleteEvent(question.q_id)}>
          删除
        </div>}
    </ItemWrapper>
  )
}
