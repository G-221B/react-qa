import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 50px;
  background-color: #3579a6;
  .header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    .left {
      display: flex;
      align-items: center;
      .logo {
        display: flex;
        align-items: center;
        width: 100px;
        height: 100%;
        text-align: center;  
        .icon {
          width: 80px;
          height: 35px;
        }
      }
      .nav {
        height: 100%;
        a {
          display: inline-block;
          padding: 0 20px;
          height: 100%;
          line-height: 50px;
          cursor: pointer;
          color: #fff;
          &:hover,&.nav-active {
            background-color: #2c618d;
          }
        }
      }
    }
    .right {
      display: flex;
      align-items:center;
      .search {
        width: 200px;
        input {
          outline: none;
          &::placeholder {
            color: #999;
          }
        }
      }
      .btns {
        margin-left: 30px;
        button {
          margin-right: 15px;
          border: none;
          &.btn-login {
            background-color: #5bbf5a;
            &:hover {
              background-color: #38b836;
            }
          }
          &.btn-register {
            background-color: #40a9ff;
            &:hover {
              background-color: #1890ff;
            }
          }
        }
      }
      .user {
        display: flex;
        align-items: center;
        height:50px;
        margin-left: 30px;
        .btn-publish {
          margin-right: 40px;
        }
        .user-info {
          display: flex;
          position: relative;
          height: 100%;
          align-items: center;
          &:hover .user-menu{
            display: block;
          }
          img{
            width: 30px;
            height: 30px;
            border-radius: 50%;
            cursor:pointer;
          }
          .user-menu {
            display: none;
            position: absolute;
            top: 50px;
            right: -40px;
            background-color: #fff;
            box-shadow: 0 0 2px #999;
            .menu-item {
              display: inline-block;
              width: 96px;
              height: 42px;
              line-height: 42px;
              text-align: center;
              &:hover {
                background-color: #f0f0f0;
              }
            }
          }
        }
      }
    }
  }
`