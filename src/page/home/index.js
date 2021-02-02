import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { HomeWrapper } from './style'
import JGHeader from '@/components/header'
import JGFooter from '@/components/footer'
import { getUserInfo } from '@/service/user'
import { getDataFromStorage } from '@/utils'
import { changeUserAccount, changeUserId } from '@/store/user/actionCreator'

export default function JGHome (props) {
  const [user_info, setUser_info] = useState()
  const dispatch = useDispatch()

  // 将history挂载到window上，让在axios上可以调用
  useEffect(() => {
    window.$myHistory = props.history
  }, [props.history])

  // 初始化页面
  useEffect(() => {
    async function fetchData () {
      const user_account = getDataFromStorage('account')
      if (!user_account) {
        return
      }
      const res = await getUserInfo(user_account)
      if (res.status === 0) {
        dispatch(changeUserAccount(res.data.user[0].account))
        dispatch(changeUserId(res.data.user[0].id))
        setUser_info(res.data.user[0])
      }
    }
    fetchData()
  }, [dispatch])
  return (
    <HomeWrapper>
      <JGHeader user_info={user_info} />
      <div className="home-main">
        {renderRoutes(props.route.routes)}
      </div>
      <JGFooter />
    </HomeWrapper>
  )
}
