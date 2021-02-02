import React from 'react'
import { MenuWrapper } from './style'
import { NavLink, withRouter } from 'react-router-dom'
import { clearStorageByKey } from '@/utils'

function JGMenu (props) {
  const logout = (e) => {
    e.preventDefault()
    clearStorageByKey('token')
    clearStorageByKey('account')
    props.history.push('/login')
  }
  return (
    <MenuWrapper>
      <ul className="menu-list">
        {
          props.user_menu.map(item => {
            return (
              <li key={item.title}>
                <NavLink to={item.path} className="menu-item" exact>{item.title}</NavLink>
              </li>
            )
          })
        }
        <li>
          <a className="menu-item" onClick={logout} href="javascipt;">退出</a>
        </li>
      </ul>
    </MenuWrapper>
  )
}
export default withRouter(JGMenu)