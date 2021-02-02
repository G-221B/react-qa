import styled from 'styled-components'

export const ItemWrapper = styled.div`
  position: relative;
  display: flex;
  height: 80px;
  padding: 10px 0;
  border-bottom: 1px solid #f5f5f5;
  &:hover .delete {
    display: block;
  }
  .right {
    display: flex;
    flex: 2;
    align-items: center;
    justify-content: space-around;
    font-size: 12px;
    .box {
      width: 40px;
      height: 40px;
      color: #999;
      text-align: center;
    }
    .reply {
      color: #007bff;
      background-color: #e5f2ff;
    }
  }
  .left {
    flex: 8;
    padding: 5px 0;
    .title {
      margin: 0;
      font-weight: 400;
      font-size: 16px;
      color: #333;
      &:hover {
        text-decoration: underline;
      }
    }
    .type {
        margin-left: 10px;
        padding: 3px;
        font-size: 12px;
        color: #007bff;
        background-color: #e5f2ff;
      }
    .detail {
      margin-top: 10px;
      font-size: 12px;
      color: #999;
      span {
        margin-right: 10px;
      }
    }
  }
  .delete {
    display: none;
    cursor: pointer;
    position: absolute;
    bottom: 0;
    right: 12px;
    font-size: 12px;
    color: red;
  }
`