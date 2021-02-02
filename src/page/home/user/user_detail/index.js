import React, { useState, useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Input, Form, Button, Radio } from 'antd'
import { UserDetailWrapper } from './style'
import { uploadFile, getUserInfo, changeUserInfo } from '@/service/user'
import { useTitle } from '@/hooks'


export default function JGUserDetail () {
  const [userInfo, setUserInfo] = useState({
    avatar: '',
    name: '',
    account: '',
    sex: '',
    email: '',
    detail: '',
    create_time: ''
  })
  const [editorShow, setEditorShow] = useState(false)
  const [avatarUrl, setAvatarUrl] = useState('http://localhost:3000/static/media/avatar.013240f6.png')
  const user_account = useSelector(state => state.user.account)
  const user_id = useSelector(state => state.user.user_id)

  useTitle('用户详情')

  const form = Form.useForm()[0]
  const avatarRef = useRef()

  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 11 },
  };


  useEffect(() => {
    async function fetchData () {
      const res = await getUserInfo(user_account)
      if (res.status === 0) {
        setUserInfo({
          avatar: res.data.user[0].avatar,
          name: res.data.user[0].username,
          sex: res.data.user[0].sex,
          account: res.data.user[0].account,
          email: res.data.user[0].email,
          detail: res.data.user[0].detail,
          create_time: res.data.user[0].create_time
        })
        form.setFieldsValue({
          name: res.data.user[0].username,
          sex: res.data.user[0].sex,
          email: res.data.user[0].email,
          detail: res.data.user[0].detail
        })
      }
    }
    fetchData()
  }, [user_account, form])

  const onFinish = async (e) => {
    const { name, sex, email, detail } = e

    const res = await changeUserInfo(user_id, avatarUrl, name, sex, email, detail)
    if (res.status === 0) {
      setEditorShow(false)
      setUserInfo({
        ...userInfo,
        avatar: avatarUrl,
        name,
        sex,
        email,
        detail,
      })
    }
  }
  const avatarChange = async (e) => {
    let file = e.target.files[0]
    const res = await uploadFile(file, () => { })
    if (res.status === 0) {
      setAvatarUrl(res.data.imgUrl)
      avatarRef.current.src = res.data.imgUrl
    }
  }
  return (
    <UserDetailWrapper>
      <h2 className="title">基本信息</h2>
      <div className="detail" onClick={e => setEditorShow(true)} style={{ display: !editorShow ? 'block' : 'none' }}>
        <div className="user-avatar msg">
          <span>用户头像</span>
          <span><img src={userInfo.avatar} alt="" /></span>
        </div>
        <div className="user-name msg">
          <span>用户昵称</span>
          <span>{userInfo.name}</span>
        </div>
        <div className="user-id msg">
          <span>用户账户</span>
          <span>{userInfo.account}</span>
        </div>
        <div className="user-sex msg">
          <span>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别</span>
          <span>{userInfo.sex}</span>
        </div>
        <div className="user-email msg">
          <span>邮箱地址</span>
          <span>{userInfo.email}</span>
        </div>
        <div className="user-detail msg">
          <span>个人简介</span>
          <span>{userInfo.detail}</span>
        </div>
        <div className="user-createtime msg">
          <span>注册日期</span>
          <span>{userInfo.create_time}</span>
        </div>
        <div className="user-editor">
          <svg t="1611725257983" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2578" width="16" height="16"><path d="M300.8 723.2c0 12.8 0 19.2 6.4 25.6 6.4 6.4 12.8 6.4 19.2 6.4h6.4l172.8-44.8 448-448c19.2-19.2 32-51.2 0-83.2l-64-64c-32-32-64-32-96 6.4l-448 435.2-44.8 166.4zM825.6 160c6.4-6.4 19.2-6.4 25.6 0l44.8 44.8c6.4 6.4 6.4 19.2 0 25.6l-44.8 44.8-70.4-70.4 44.8-44.8zM736 249.6l70.4 70.4-313.6 313.6-70.4-70.4L736 249.6zM384 608l64 64-83.2 19.2L384 608z m544-204.8c-25.6 0-38.4 12.8-38.4 25.6v409.6c0 19.2-19.2 38.4-38.4 38.4H166.4c-19.2 0-38.4-19.2-38.4-38.4V179.2c0-19.2 19.2-38.4 38.4-38.4h448c12.8 0 25.6-12.8 25.6-32s-12.8-32-32-32H160c-51.2 0-96 44.8-96 96v678.4c0 51.2 44.8 96 96 96h704c51.2 0 96-44.8 96-96v-416c0-19.2-12.8-32-32-32z" p-id="2579" fill="#1890ff"></path></svg>
          <span>编辑</span>
        </div>
      </div>
      <div className="editor" style={{ display: editorShow ? 'block' : 'none' }}>
        <Form
          {...layout}
          onFinish={onFinish}
          name="form"
          form={form}
        >
          <Form.Item label="头像" >
            <img src={avatarUrl} alt="" ref={avatarRef} />
            <input type="file" name="avatar" onChange={avatarChange} />
          </Form.Item>
          <Form.Item name='name' label="用户昵称" rules={[{ required: true, message: '', }, {
            validator: (rule, value = '') => {
              if (value.length > 16 || value.length < 1) {
                return Promise.reject('昵称长度在1-16位之间')
              }
              return Promise.resolve()
            }
          }]}>
            <Input />
          </Form.Item>
          <Form.Item name='sex' label="性别" rules={[{ required: true, message: '请选择你的性别' }]}>
            <Radio.Group>
              <Radio value='男'>男</Radio>
              <Radio value='女'>女</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name='email'
            label="邮箱地址"
            rules={
              [
                { required: true, message: '邮箱不能为空', },
                { type: 'email', message: '不是合法的邮箱' }
              ]
            }>
            <Input />
          </Form.Item>
          <Form.Item name='detail' label="个人简介" rules={[{ required: true, message: '个人简介不能为空' }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              保存
              </Button>
            <Button type="primary" onClick={e => setEditorShow(false)}>
              取消
              </Button>
          </Form.Item>
        </Form>
      </div>
    </UserDetailWrapper >
  )
}
