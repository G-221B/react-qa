import React from 'react'
import { useSelector } from 'react-redux'
import { Form, Input, Button, message } from 'antd'
import { SafeWrapper } from './style'
import { changeUserPassword } from '@/service/user'
import { useTitle } from '@/hooks'

export default function JGSafe () {
  const user_id = useSelector(state => state.user.user_id)

  useTitle('修改密码')

  const [form] = Form.useForm()
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },

  }
  const onFinish = async (e) => {
    const res = await changeUserPassword(user_id, e.old_password, e.password)
    if (res.status === 0) {
      message.success({
        style: {
          fontSize: '12px'
        },
        duration: 1,
        content: '修改成功'
      })
      form.setFieldsValue({
        old_password: '',
        password: '',
        confirmPassword: ''
      })
    }
  }
  return (
    <SafeWrapper>
      <h2 className="title">修改密码</h2>
      <Form
        onFinish={onFinish}
        form={form}
        {...layout}
        name="register-form"
        labelAlign="right">
        <Form.Item
          name='old_password'
          label="旧密码"
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
          name='password'
          label="新密码"
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
        <Form.Item labelAlign="right">
          <div className="finish-btn">
            <Button type="primary" htmlType="submit">
              修改
            </Button>
          </div>
        </Form.Item>
      </Form>
    </SafeWrapper>
  )
}
