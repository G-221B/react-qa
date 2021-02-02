import React, { useState, useCallback, useReducer, useRef, memo } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Captcha from 'react-captcha-code'
import classnames from 'classnames'
import reducer from './reducer'
import JGFooter from '@/components/footer'
import { LoginWrapper } from './style'
import { Input, Button } from 'antd';
import { CODE_SIZE } from '@/common/constants'
import { changeCode, changeUserCode, changeAccount, changePassword } from './actionCreator'
import { userLogin } from '@/service/user'
import { saveDataToStorage } from '@/utils'
import { changeUserAccount, changeUserId } from '@/store/user/actionCreator'
import JGSubHeader from '@/components/sub-header'
import { useTitle } from '@/hooks'

export default memo(function JGLogin (props) {
  const [accountErr, setAccountErr] = useState('')
  const [passwordErr, setPasswordErr] = useState('')
  const [codeErr, setCodeErr] = useState('')

  const myDispatch = useDispatch()

  const captchaRef = useRef()

  const [state, dispatch] = useReducer(reducer, {
    code: '',
    userCode: '',
    account: '',
    password: ''
  })

  useTitle('登陆页面')
  const codeChange = useCallback((newCode) => {
    dispatch(changeCode(newCode))
  }, [])
  const accountChange = useCallback((e) => {
    const value = e.target.value
    dispatch(changeAccount(value))
    if (value.trim() !== '') {
      setAccountErr('')
    } else {
      setAccountErr('账号不能为空')
    }
  }, [])
  const passwordChange = useCallback((e) => {
    const value = e.target.value
    dispatch(changePassword(e.target.value))
    if (value.trim() !== '') {
      setPasswordErr('')
    } else {
      setPasswordErr('密码不能为空')
    }
  }, [])
  const userCodeChange = useCallback((e) => {
    const value = e.target.value
    dispatch(changeUserCode(value))
    if (value.trim() !== '') {
      setCodeErr('')
    } else {
      setCodeErr('验证码不能为空')
    }
  }, [])
  const login = useCallback(async () => {
    let flag = false
    if (state.account.trim() === '') {
      flag = true
      setAccountErr('账号不能为空')
    }
    if (state.password.trim() === '') {
      flag = true
      setPasswordErr('密码不能为空')
    }
    if (state.userCode.trim() === '') {
      flag = true
      setCodeErr('验证码不能为空')
    }
    if (state.userCode.toLowerCase() !== state.code.toLowerCase()) {
      flag = true
      setCodeErr('验证码不正确')
      captchaRef.current.refresh()
    }
    if (flag) {
      return
    }
    const res = await userLogin(state.account, state.password)
    if (res.status === 0) {
      saveDataToStorage(res.data.token, 'token')
      saveDataToStorage(state.account, 'account')
      myDispatch(changeUserAccount(state.account))
      myDispatch(changeUserId(res.data.user_id))
      props.history.push('/home')
    } else {
      captchaRef.current.refresh()
      dispatch(changeUserCode(''))
    }
  }, [state, props.history, myDispatch])
  return (
    <LoginWrapper>
      <JGSubHeader />
      <div className="login-main">
        <div className="login-body">
          <h2 className="title">登陆界面</h2>
          <div className={classnames({ 'error': accountErr !== '' }, "input-item")}>
            <span className="input-name">账号:</span>
            <Input placeholder="请输入账号" value={state.account} onChange={accountChange} />
            <p className={classnames({ 'error': state.account.trim() === '' ? 'error' : '' }, 'tips')}>{accountErr}</p>
          </div>
          <div className={classnames({ 'error': passwordErr !== '' }, "input-item")}>
            <span className="input-name">密码:</span>
            <Input.Password placeholder="请输入密码" value={state.password} onChange={passwordChange} />
            <p className="tips">{passwordErr}</p>
          </div>
          <div className={classnames({ 'error': codeErr !== '' }, 'input-item')} id="code-item">
            <span className="input-name">验证码:</span>
            <Input placeholder="请输入验证码" value={state.userCode} onChange={userCodeChange} onPressEnter={login} />
            <Captcha ref={captchaRef} charNum={CODE_SIZE} onChange={codeChange} height="30" />
            <p className="tips">{codeErr}</p>
          </div>
          <div className="btn">
            <Button type="primary" onClick={login}>登陆</Button>
          </div>
          <NavLink to="/register" className="register">还没有账号？立即注册→</NavLink>
        </div>
      </div>
      <JGFooter />
    </LoginWrapper >
  )
})
