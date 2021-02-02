import React, { useCallback, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Input, Select, Button, message } from 'antd'
import JGEditor from '@/components/editor'
import { useLogin, useTitle } from '@/hooks'
import { PublishWrapper } from './style'
import { getQuestionType } from '@/service/question'
import { publishQuestion } from '@/service/question'

export default function JGPublish (props) {
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')
  const [type, setType] = useState('')
  const [typeArr, setTypeArr] = useState([])

  const user_id = useSelector(state => state.user.user_id)

  useLogin(props.history)

  useTitle('发布问题')
  useEffect(() => {
    async function fetchData () {
      const res = await getQuestionType()
      if (res.status === 0) {
        setTypeArr(res.data.question_type)
      }
    }
    fetchData()
  }, [])

  // 双向绑定

  const titleChange = useCallback((e) => {
    setTitle(e.target.value)
  }, [])
  const typeChange = useCallback((value) => {
    setType(value)
  }, [])
  const contentChange = useCallback((value) => {
    setContent(value)
  }, [])


  const submit = useCallback(async () => {
    let contentStr = typeof content === 'string' ? content : content.toHTML()
    let errMsg = ''
    if (title.length < 1 || title.length > 30) errMsg = '标题不合法 '
    if (type === '') errMsg += '未选择问题类型'
    if (errMsg.length !== 0) {
      return message.error({
        style: {
          fontSize: '12px'
        },
        duration: 1,
        content: errMsg
      })
    }

    const res = await publishQuestion(user_id, type, title, contentStr)
    if (res.status === 0) {
      message.success({
        style: {
          fontSize: '12px'
        },
        duration: 1,
        content: '发布成功'
      })
      props.history.push('/home/user/question')
    }
  }, [user_id, title, content, type, props.history])
  return (
    <>
      <PublishWrapper className="wrap-v1">
        <header className="header">
          <svg t="1611319065115" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4146" width="25" height="25"><path d="M956.6 133.3l-62.9-62.9c-8.5-8.5-22.6-8.5-31.2 0.2l-61.2 61.2c-8.8 8.8-8.8 22.7-0.2 31.2l62.9 62.9c8.5 8.5 22.6 8.5 31.2-0.2l61.2-61.2c8.8-8.8 8.8-22.7 0.2-31.2zM378.6 570.8l-19.7 81c-2.9 11.9 4.4 19.3 16.4 16.4l80.9-19.7c11.9-2.9 14.7-12.2 6.1-20.8l-62.9-62.9c-8.5-8.5-17.9-5.9-20.8 6z" fill="#333333" p-id="4147"></path><path d="M895.8 892.8c0 12.4-10 22.4-22.4 22.4H134.2c-12.4 0-22.4-10-22.4-22.4V153.6c0-12.4 10-22.4 22.4-22.4h515.2l44.8-44.8h-560c-37.1 0-67.2 30.1-67.2 67.2v739.2c0 37.1 30.1 67.2 67.2 67.2h739.2c37.1 0 67.2-30.1 67.2-67.2V310.4l-44.8 44.8v537.6z" fill="#333333" p-id="4148"></path><path d="M414.8 549.3l62.9 62.9c8.5 8.5 22.5 8.5 31.2-0.2l339.4-339.4c8.6-8.6 8.7-22.6 0.2-31.2l-62.9-62.9c-8.5-8.5-22.5-8.5-31.2 0.2L415 518.1c-8.7 8.6-8.8 22.6-0.2 31.2z" fill="#333333" p-id="4149"></path></svg>
          <h2 className="title">发布问题</h2>
        </header>
        <div className="box">
          <h2 className="q-title">
            问题标题:
          </h2>
          <Input placeholder="输入长度为1-30位的问题标题" value={title} onChange={titleChange} />
          <h2 className="q-title">
            问题补充:
          </h2>
          <div className="editor-wrapper">
            <JGEditor content={content} contentChange={contentChange} />
          </div>
          <div className="type">
            <Select onChange={typeChange} placeholder="请选择类别">
              {
                typeArr.map(item => {
                  return <Select.Option value={item.question_tid} key={item.question_tid}>{item.type_name}</Select.Option>
                })
              }
            </Select>
          </div>
          <div className="btn-publish">
            <Button type="primary" onClick={submit}>发布</Button>
          </div>
        </div>
      </PublishWrapper>
    </>
  )
}
