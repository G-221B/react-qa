import styled from 'styled-components'

export const AnswerItemWrapper = styled.div`
 padding: 15px;
 border: 1px solid #e6e6e6;
  .header {
    display: inline-block;
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
    span {
      color: #333;
      margin-left: 8px;
    }
  }
  .answer {
    padding:0 40px;
    padding-top: 10px;
  }
  .footer {
    display: flex;
    justify-content: space-between;
    .detail {
      padding:0  40px;
      font-size: 14px;
      color: #999;
      .icon-dianzan {
        font-size: 14px;
        span {
          margin: 0;
          margin-left: 2px;
        }
      }
      span {
        margin-right: 10px;
      }
      .active {
        color: #40a9ff;
      }
      .star {
        cursor: pointer;
      }
      .icon-shanchu {
        color: #666;
        cursor: pointer;
        &:hover {
          color: red;
        }
      }
      .icon-shanchu {
        margin-right: 20px;
      }
    }
  }
`