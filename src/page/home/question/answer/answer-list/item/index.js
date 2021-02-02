import React from 'react'
import { Button } from 'antd'
import classnames from 'classnames'
import JGContent from '@/components/content'
import { AnswerItemWrapper } from './style'
import { NavLink } from 'react-router-dom'
import { formatDate } from '@/utils'

export default function JGAnswerItem (props) {
  return (
    <AnswerItemWrapper>
      <NavLink to="/" className="header">
        <img src={props.item.avatar} alt="" />
        <span>{props.item.username}</span>
      </NavLink>
      <div className="answer">
        <JGContent maxHeight={200}
          content={props.item.a_content}
        />
      </div>
      <div className="footer">
        <div className="detail">
          <span className="time">{formatDate(props.item.a_time)}</span>
          <span
            className={classnames({ active: props.item.star }, 'star', 'iconfont', 'icon-dianzan')}
            onClick={() => props.star(props.item.a_id, props.index)}
          >
            <span>{props.item.star_num}</span>
          </span>
          {
            props.showDelete
            &&
            <span
              className="iconfont icon-shanchu"
              onClick={e => props.delete(props.item.a_id)}
            >
            </span>
          }
        </div>
        <div className="handle">
          {
            props.showBtn
            &&
            <Button type="primary" onClick={() => props.setTrueAnswer(props.item.a_id)}>
              设为答案
            </Button>
          }
        </div>
      </div>
    </AnswerItemWrapper>
  )
}
