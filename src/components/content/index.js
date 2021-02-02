import React, { useState, useRef, useEffect, } from 'react'
import { ContentWrapper } from './style'

export default function JGContent (props) {
  const [show, setShow] = useState(false) // 加载更多和收起
  const [open, setOpen] = useState(false) // 是否开启加载更多模式
  const wrapRef = useRef()
  const contentRef = useRef()
  useEffect(() => {
    // 通过时间轮询来查询document加载完了没，从而决定要不要出现加载更多
    let t = setInterval(() => {
      if (contentRef.current.clientHeight > props.maxHeight) {
        setOpen(true)
      }
      if (document.readyState === 'complete') {
        clearInterval(t)
      }
    }, 500)
    return () => {
      clearInterval(t)
    }
  }, [contentRef, props.maxHeight])
  // 查看更多
  const showMore = function () {
    setShow(true)
    wrapRef.current.style.maxHeight = '1200px'
  }
  // 收起
  const closeMore = function () {
    setShow(false)
    wrapRef.current.style.maxHeight = props.maxHeight + 'px'
  }
  return (
    <ContentWrapper ref={wrapRef} maxHeight={`${props.maxHeight}px`}>
      <div
        id="content"
        className="content"
        ref={contentRef}
        dangerouslySetInnerHTML={{ __html: props.content }}
      >
      </div>
      {
        open && (show ?
          <p className="close"><span onClick={closeMore}><span className="iconfont icon-shang"></span>收起</span></p>
          :
          <p className="read-more"><span onClick={showMore}><span className="iconfont icon-xia"></span>查看更多</span></p>
        )
      }
    </ContentWrapper>
  )
}
