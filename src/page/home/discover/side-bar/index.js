import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { SideBarWrapper } from './style'
import { fetchQuestionList } from '@/store/question/actionCreator'

export default function JGSideBar () {
  const top_list = useSelector(state => state.question.top_list)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchQuestionList(1, 'hot'))
  }, [dispatch])
  return (
    <SideBarWrapper>
      <h2 className="title">
        热门推荐
        <svg t="1611302910646" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5900" width="16" height="16"><path d="M360.555789 955.122526c-55.457684-114.984421-26.004211-181.086316 16.545685-243.065263 46.565053-67.826526 58.772211-135.221895 58.77221-135.221895s36.378947 47.562105 21.989053 121.882948c64.538947-72.165053 76.907789-186.421895 67.125895-230.4 146.458947 102.049684 208.842105 323.098947 124.335157 486.80421 448.296421-253.116632 111.535158-631.700211 53.032422-674.681263 19.402105 42.981053 22.986105 114.984421-16.249264 150.069895-66.667789-252.820211-231.828211-304.720842-231.82821-304.720842 19.536842 130.506105-71.006316 272.976842-157.965474 379.742316-3.287579-51.873684-6.467368-87.956211-33.899789-137.701053-6.197895 94.450526-78.632421 171.627789-98.034527 266.186105-26.300632 128.215579 19.833263 221.938526 196.176842 321.104842z" p-id="5901" fill="#d14342"></path></svg>
      </h2>
      <ul className="top-list">
        {
          top_list.map((item, index) => {
            return (
              <li className="list-item" key={item.q_id}>
                <span>{index + 1}</span>
                <NavLink to={'/home/question/' + item.q_id}>{item.q_title}</NavLink>
              </li>
            )
          })
        }
      </ul>
    </SideBarWrapper>
  )
}
