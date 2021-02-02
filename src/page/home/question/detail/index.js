import React from 'react'
import BraftEditor from 'braft-editor'
import classnames from 'classnames'
import { Button } from 'antd'
import { DetailWrapper } from './style'
import { NavLink } from 'react-router-dom'
import { formatTime } from '@/utils'
import JGContent from '@/components/content'

export default function JGDetail (props) {
  const { question } = props
  return (
    <DetailWrapper>
      <div className="type">
        <NavLink to="/">{question.type_name}</NavLink>
      </div>
      <header className="header">
        <h2 className="title">{question.q_title}</h2>
        <div className="detail">
          <span>发布于 {formatTime(question.q_time)}</span>
          <span>提问者：{question.username}</span>
          <span>浏览：{question.view_num}次</span>
          <span
            className={classnames({ active: question.star }, "iconfont", "icon-dianzan")}
            onClick={props.star}
          >
          </span>
          <span
            className={classnames({ active: question.star })}
          >
            {question.star_num}
          </span>
        </div>
      </header>
      <JGContent
        maxHeight="100"
        content={BraftEditor.createEditorState(question.q_content).toHTML()}
      />
      <div className="handle">
        <Button
          type="primary"
          onClick={props.mark}
        >
          {question.mark ? '已标注' : '标注该问题'}
        </Button>
      </div>
    </DetailWrapper>
  )
}
