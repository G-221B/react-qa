import styled from 'styled-components'

export const MenuWrapper = styled.div`
  float: left;
  width: 185px;
  margin-right: 15px;
  padding: 5px 0; 
  background-color: #fff;
  .menu-item {
    display: inline-block;
    width: 100%;
    height: 50px;
    line-height: 50px;
    color: black;
    text-align: center;
    &:hover,&.active {
      background-color: #f0f0f5;
    }
  }
`