import React from 'react'
import { Redirect } from 'react-router-dom'

const JGHome = React.lazy(() => import(/* webpackChunkName: "home" */ '@/page/home'))
const JGLogin = React.lazy(() => import(/* webpackChunkName: "login" */ '@/page/login'))
const JGRegister = React.lazy(() => import(/* webpackChunkName: "register" */ '@/page/register'))
const JGDiscover = React.lazy(() => import(/* webpackChunkName: "discover" */ '@/page/home/discover'))
const JGCategory = React.lazy(() => import(/* webpackChunkName: "category" */ '@/page/home/category'))
const JGPublish = React.lazy(() => import(/* webpackChunkName: "publish" */ '@/page/home/publish'))
const JGSearch = React.lazy(() => import(/* webpackChunkName: "search" */ '@/page/home/search'))
const JGTopic = React.lazy(() => import(/* webpackChunkName: "topic" */ '@/page/home/topic'))
const JGQuestion = React.lazy(() => import(/* webpackChunkName: "question" */ '@/page/home/question'))
const JGUser = React.lazy(() => import(/* webpackChunkName: "user" */ '@/page/home/user'))
const JGUserDetail = React.lazy(() => import(/* webpackChunkName: "userDeatil" */ '@/page/home/user/user_detail'))
const JGUserMark = React.lazy(() => import(/* webpackChunkName: "userMark" */ '@/page/home/user/user_mark'))
const JGUserQuestion = React.lazy(() => import(/* webpackChunkName: "userQuestion" */ '@/page/home/user/user_question'))
const JGUserSafe = React.lazy(() => import(/* webpackChunkName: "userSafe" */ '@/page/home/user/safe'))
const JGNotFound = React.lazy(() => import(/* webpackChunkName: "notFound" */ '@/page/not-found'))

const routes = [
  {
    path: '/',
    exact: true,
    render: () => (
      <Redirect to={"/home"} />
    )
  },
  {
    path: '/home',
    component: JGHome,
    routes: [
      {
        path: '/home',
        exact: true,
        component: JGDiscover
      },
      {
        path: '/home/category',
        component: JGCategory
      },
      {
        path: '/home/publish',
        component: JGPublish
      },
      {
        path: '/home/search',
        component: JGSearch
      },
      {
        path: '/home/topic/:id',
        component: JGTopic
      },
      {
        path: '/home/question/:id',
        component: JGQuestion
      },
      {
        path: '/home/user',
        component: JGUser,
        routes: [
          {
            path: '/home/user',
            exact: true,
            component: JGUserDetail
          },
          {
            path: '/home/user/question',
            component: JGUserQuestion
          },
          {
            path: '/home/user/mark',
            component: JGUserMark
          },
          {
            path: '/home/user/safe',
            component: JGUserSafe
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    component: JGLogin
  },
  {
    path: '/register',
    component: JGRegister
  },
  {
    path: '*',
    component: JGNotFound
  }
]

export default routes