import React from 'react'
import { Button } from 'antd'
import JGAnswerItem from './item'
import { AnswerListWrapper } from './style'

export default function JGAnswerList (props) {
  return (
    <AnswerListWrapper>
      {
        props.best_answer && (
          <div className="best">
            <JGAnswerItem
              item={props.best_answer}
              star={props.star}
              index={props.best_index}
              key={props.best_answer.a_id}
              showDelete={props.user_id === props.best_answer.u_id}
              delete={id => props.delete(id)}
            />
            <img
              src={require('@/assets/img/best_answer.png').default}
              alt=""
              className="best-img"
            />
            {
              props.showBtn && <Button type="primary" onClick={() => props.cancelTrueAnswer(props.best_answer.a_id)}>
                取消推荐
            </Button>
            }
          </div>
        )
      }
      {
        props.answer.map((item, index) => {
          return (
            <JGAnswerItem
              item={item}
              key={item.a_id}
              star={props.star}
              index={index}
              showBtn={props.showBtn}
              showDelete={props.user_id === item.u_id}
              delete={id => props.delete(id)}
              setTrueAnswer={(id) => props.setTrueAnswer(id)}
            />
          )
        })
      }
    </AnswerListWrapper>
  )
}
