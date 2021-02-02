import styled from 'styled-components'

export const CategoryItemWrapper = styled.div`
  display: flex;
  width: 40%;
  padding: 5px;
  margin-top: 6px;
  margin-bottom: 20px;
  background-color: #ebebeb;
  cursor: pointer;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  &:hover {
    box-shadow: 0 0 1px #666;
  }
  a {
    display: flex;
    width: 100%;
    .left {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 2;
      .icon {
        text-align: center;
        vertical-align: center;
      }
    }
    .right {
      flex: 8;
      margin-left: 10px;
      .title {
        display: inline-block;
        padding: 2px 5px;
        border-radius: 5px;
        color: #fff;
        background-color: #1890ff;
      }
      .go {
        margin-left: 8px;
      }
      .detail {
        margin: 0;
        margin-top: 6px;
        font-size: 12px;
        color: #999;
      }
    }
  }
`