import React, { useCallback, useMemo } from 'react'
import { NavLink } from 'react-router-dom'
import { Input, Radio, Form, Button, message } from 'antd';
import { RegisterWrapper } from './style'
import { getUserInfo } from '@/service/user'
import { debounce } from '@/utils'
import { userRegister } from '@/service/user'
import JGSubHeder from '@/components/sub-header'
import JGFooter from '@/components/footer'
import { useTitle } from '@/hooks';

export default function JGRegister (props) {
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },

  }

  useTitle('注册页面')

  const validateAccount = useMemo(() => {
    return debounce(async (rule, value = '', resolve, reject) => {
      if (value.length < 8 || value.length > 16) {
        return reject('账号长度在8-16位之间')
      }
      const res = await getUserInfo(value)
      if (res.data && res.data.user && res.data.user.length === 0) {
        resolve()
      } else {
        reject('账号已存在')
      }
    })
  }, [])

  const register = useCallback(async (user) => {
    const res = await userRegister(user)
    if (res.status === 0) {
      message.success({
        style: {
          fontSize: '12px'
        },
        duration: 1,
        content: '注册成功'
      })
      props.history.push('/login')
    }
  }, [props.history])

  return (
    <RegisterWrapper>
      <JGSubHeder />
      <div className="register-main">
        <div className="register-body">
          <h2 className="title">用户注册</h2>
          <Form
            onFinish={register}
            {...layout}
            name="register-form"
            labelAlign="right">
            <Form.Item
              name='name'
              label="昵称"
              hasFeedback
              rules={[{ required: true, message: '', }, {
                validator: (rule, value = '') => {
                  if (value.length > 16 || value.length < 1) {
                    return Promise.reject('昵称长度在1-16位之间')
                  }
                  return Promise.resolve()
                }
              }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name='account'
              hasFeedback
              label="账号"
              rules={[{ validator: validateAccount }, { required: true, message: '' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name='password'
              label="密码"
              hasFeedback
              rules={[{ required: true, message: '' }, {
                validator: (rule, value) => {
                  if (!value || value.length < 8 || value.length > 16) {
                    return Promise.reject('密码长度在8-16位之间')
                  }
                  return Promise.resolve('')
                }
              }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name='confirmPassword'
              label="确认密码"
              dependencies={['password']}
              hasFeedback
              rules={[{ required: true, message: '密码不能为空' },
              ({ getFieldValue }) => ({
                validator (_, value) {
                  if (!value || (getFieldValue('password') === value && value !== '')) {
                    return Promise.resolve()
                  }
                  return Promise.reject('两次输入的密码不一致')
                }
              })
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name='sex'
              label="性别"
              rules={[{ required: true, message: '请选择你的性别' }]}
            >
              <Radio.Group >
                <Radio value='1'>男</Radio>
                <Radio value='0'>女</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name='email'
              label="email"
              hasFeedback
              rules={[{ required: true, message: '', }, { type: 'email', message: '不是合法的邮箱' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name='detail'
              label="个人简介"
              rules={[{ required: true, message: '个人简介不能为空' }]}
            >
              <Input.TextArea />
            </Form.Item>
            <Form.Item labelAlign="right">
              <div className="register-btn">
                <Button type="primary" htmlType="submit">
                  注册
            </Button>
              </div>
            </Form.Item>
          </Form>
          <NavLink to="/login" className="login">已有账号？立即登陆→</NavLink>
        </div>
      </div>
      <JGFooter />
    </RegisterWrapper >
  )
}
