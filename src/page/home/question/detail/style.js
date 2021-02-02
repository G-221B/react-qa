import styled from 'styled-components'

export const DetailWrapper = styled.div`
  padding: 15px;
  background-color: #fff;
  .type {
    a {
      display: inline-block;
      padding: 2px 4px;
      background-color: #e5f2ff;
      &:hover {
        color: #fff;
        background-color:#1890ff;
      }
    }
  }
  .header {
    margin-top: 8px;
    .detail {
      span {
        margin-left: 5px;
        color: #999;
      }
      .icon-dianzan {
        margin-left: 8px;
        margin-right: -5px;
        cursor: pointer;
      }
      .active {
          color: #1890ff;
        }
    }
  }

`