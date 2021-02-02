import React from 'react'
import { NavLink } from 'react-router-dom'
import { NotFoundWrapper } from './style'

export default function JGNotFound () {
  return (
    <NotFoundWrapper>
      <div className="box">
        <h1>404</h1>
        <h2>Not Found</h2>
        <h3>The resource requested could not be found on this server!</h3>
        <NavLink to="/">返回首页</NavLink>
      </div>
    </NotFoundWrapper>
  )
}
