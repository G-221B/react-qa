import styled from 'styled-components'

export const NavHeaderWrapper = styled.div`
  position: relative;
  height: 63px;
  padding: 30px 20px 0;
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  .title {
    position: absolute;
    left: 15px;
    top: 50%;
    font-size: 18px;
    color: #333;
    transform: translateY(-50%);
    .icon {
      margin-right: 5px;
      vertical-align:text-bottom;
    }
  }
  .nav-list {
    display: flex;
    position: absolute;
    right: 10px;
    margin: 0;
    
    .list-item {
      margin-left: 5px;
      span {
        padding: 10px;
        cursor: pointer;
        color: #666;
        &:hover,&.active {
          border-bottom: 2px solid #3579a6;
        }
      }
    }
  }
`