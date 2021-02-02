import styled from 'styled-components'

export const NotFoundWrapper = styled.div`
  position: relative;
  min-height: 100%;
  .box {
    position: absolute;
    top: 50%;
    left: 50%;
    color: #444444;
    text-align: center;
    transform: translate(-50%,-60%);
    font: normal 14px/20px Arial, Helvetica, sans-serif;
    h1 {
      margin:0; 
      font-size:150px; 
      line-height:150px; 
      font-weight:bold;
    }
    h2 {
      margin-top:20px;
      font-size: 30px;
    }
  }
`