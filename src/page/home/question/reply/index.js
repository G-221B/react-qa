import React, { useState, useCallback } from 'react'
import { message } from 'antd'
import BraftEditor from 'braft-editor'
import { useSelector } from 'react-redux'
import { Button } from 'antd'
import JGEditor from '@/components/editor'
import JGNavHeader from '@/components/nav-header'
import { ReplyWrapper } from './style'
import { remindLogin } from '@/utils'
import { replyQuestion } from '@/service/user'

export default function JGReply (props) {
  const [content, setContent] = useState('')
  const user_id = useSelector(state => state.user.user_id)

  const contentChange = useCallback((value) => {
    setContent(value)
  }, [])

  // 回复问题
  const reply = useCallback(async () => {
    if (!user_id) {
      return remindLogin()
    }
    if (typeof content === 'string' && content.trim() === '') {
      return message.error({
        style: {
          fontSize: '12px'
        },
        duration: 1,
        content: '回答内容不能为空'
      })
    }
    const res = await replyQuestion(user_id, props.q_id, content.toHTML())
    if (res.status === 0) {
      message.success({
        style: {
          fontSize: '12px'
        },
        duration: 1,
        content: '回答成功'
      })
      setContent(BraftEditor.createEditorState(''))
      props.replyFinish()
    }
  }, [user_id, content, props])
  return (
    <ReplyWrapper>
      <JGNavHeader nav_list={[]} title="撰写答案" />
      <div className="editor-wrap">
        <JGEditor content={content} contentChange={contentChange} />
      </div>
      <div className="btns">
        <Button type="primary" onClick={reply}>提交答案</Button>
      </div>
    </ReplyWrapper>
  )
}
