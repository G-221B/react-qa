import { useEffect } from 'react'
import { isLogin } from '@/service/user'

// 判断是否登陆
export function useLogin (history) {
  useEffect(() => {
    async function fetchData () {
      const res = await isLogin()
      if (res.status === 401) {
        history.push('/login')
      }
    }
    fetchData()
  }, [history])
}

// 切换页面title
export function useTitle (title) {
  useEffect(() => {
    document.title = title
  }, [title])
}