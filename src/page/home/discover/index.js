import React from 'react'
import JGMain from './main'
import JGSideBar from './side-bar'
import { DiscoverWrapper } from './style'
import { useTitle } from '@/hooks'

export default function JGDiscover () {
  useTitle('首页')
  return (
    <DiscoverWrapper className="wrap-v1">
      <JGMain />
      <JGSideBar />
    </DiscoverWrapper>
  )
}
