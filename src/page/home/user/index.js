import React from 'react'
import { renderRoutes } from 'react-router-config'
import JGMenu from './menu'
import { useLogin } from '@/hooks'
import { user_menu } from '@/common/local-data'
import { UserWrapper } from './style'

export default function JGUser (props) {
  useLogin(props.history)
  return (
    <UserWrapper className="wrap-v1 clearfix">
      <JGMenu user_menu={user_menu} />
      <div className="main">
        {renderRoutes(props.route.routes)}
      </div>
    </UserWrapper>
  )
}
