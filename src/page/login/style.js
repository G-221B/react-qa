import styled from 'styled-components'

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .login-main {
    min-height: calc(100vh - 160px - 40px);
    .login-body {
      position: relative;
      width: 400px;
      height: 430px;
      margin: 0 auto;
      padding: 20px;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 0 10px #ccc;
      .title {
        margin-bottom: 30px;
        text-align: center;
        color: #1890ff;
      }
      .input-group {
        text-align: center;
      }
      .error{
        .ant-input,.ant-input-password {
        border-color: red;
        }
      }
      .input-item {
        font-size: 14px;
        .input-name {
          display: inline-block;
          width: 60px;
          text-align: right;
          margin-right: 8px;
        }
        .ant-input,.ant-input-password {
          width: 250px;
          font-size:12px;
        }
        .tips {
          height: 20px;
          margin-left: 68px;
          color: red;
          font-size: 12px;
          text-align: left;
        }
      }
      #code-item {
        .ant-input {
          width: 130px;
          margin-right: 20px;
        }
        .react-captcha {
          vertical-align: middle;
        }
      }
      .btn {
        margin-top: 30px;
        text-align: center;
      }
      .register {
        position: absolute;
        bottom: 20px;
        right: 20px;
        cursor: pointer;
        color: #1890ff;
        &:hover {
          color: red;
        }
      }
    }
  }
`