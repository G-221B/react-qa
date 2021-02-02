import styled from 'styled-components'

export const UserDetailWrapper = styled.div`
  padding: 15px;
  .title {
    font-weight: 700;
    font-size: 18px;
    color: #2e2e2e;
  }
  .detail {
    position: relative;
    padding: 15px 15px;
    cursor: pointer;
    &:hover {
      background-color: #f8f8f8;
      .user-editor {
        display: block;
      }
    }
    .user-avatar {
      line-height: 50px;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }
    .msg {
      display: flex;
      margin-bottom: 30px;
      span:nth-child(1){
        flex: 1;
        color: #555666;
      }
      span:nth-child(2) {
        flex: 8;
      }
    }
    .user-editor {
      display: none;
      position: absolute;
      right: 8px;
      top: 8px;
      color: #2296ff;
      .icon{
        margin-right: 3px;
        vertical-align: sub;
      }
    }
  }
  .editor {
    padding: 15px;
    background-color: #f8f8f8;
    img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
        border-radius: 50%;
      }
    button {
      margin-right: 15px;
    }
  }
`