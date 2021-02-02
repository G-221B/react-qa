import styled from 'styled-components'

export const SideBarWrapper = styled.div`
  flex: 3;
  padding: 10px;
  border: 1px solid #e6e6e6;
  border-left: none;
  background-color: #fff;
  .title {
    padding-bottom: 5px;
    font-size: 18px;
    font-weight:normal;
    border-bottom: 1px solid #f5f5f5;
    .icon {
      vertical-align: text-top;
    }
  }
  .top-list {
    padding-bottom: 10px;
    border-bottom: 1px solid #f5f5f5;
    .list-item {
      display: flex;
      margin-top: 8px;
      font-size: 14px;
      span {
        display: inline-block;
        flex: 1;
        text-align: center;
      }
      a{
        flex: 9;
        color: #2c3e50;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`