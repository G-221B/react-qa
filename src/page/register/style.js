import styled from 'styled-components'

export const RegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .register-main {
    min-height: calc(100vh - 160px - 40px);
    .register-body {
      position: relative;
      width: 500px;
      height: 560px;
      padding: 20px;
      margin: 0 auto;
      margin-bottom: 15px;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 0 10px #ccc;
      .title {
        margin-bottom: 30px;
        text-align: center;
        color: #1890ff;
      }
      .register-btn {
        display: inline-block;
        width: 100%;
        text-align: right;
      }
      .login {
        position: absolute;
        bottom: 10px;
        right: 20px;
        &:hover {
          color: red;
        }
      }
    }
  }
`