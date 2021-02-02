import React, { useCallback } from 'react'
import classnames from 'classnames'
import { NavHeaderWrapper } from './style'

export default function JGNavHeader (props) {
  // title切换
  const changeCurrentIndex = useCallback((index) => {
    props.changeCurrentIndex(index)
  }, [props])
  return (
    <NavHeaderWrapper>
      <h2 className="title">
        <svg t="1611226720388" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2516" width="20" height="20"><path d="M170.666667 213.333333m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" p-id="2517" fill="#333333"></path><path d="M170.666667 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" p-id="2518" fill="#333333"></path><path d="M170.666667 810.666667m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" p-id="2519" fill="#333333"></path><path d="M896 778.666667H362.666667c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h533.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32zM362.666667 245.333333h533.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32H362.666667c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32zM896 480H362.666667c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h533.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32z" p-id="2520" fill="#333333"></path></svg>
        {props.title}
      </h2>
      <ul className="nav-list">
        {
          props.nav_list.map((item, index) => {
            return (
              <li key={item.type} className="list-item">
                <span
                  className={classnames({ 'active': index === props.currentIndex })}
                  onClick={() => changeCurrentIndex(index)}
                >{item.title}</span>
              </li>
            )
          })
        }
      </ul>
    </NavHeaderWrapper>
  )
}
