import styled from 'styled-components'

export const ContentWrapper = styled.div`
  position: relative;
  max-height: ${props => props.maxHeight};
  padding-bottom: 20px;
  overflow: hidden;
  img {
    max-width: 1000px;
  }
  span {
      color: #1f94ff;
      line-height: 60px;
      cursor: pointer;
    }
  .read-more {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    height: 40px;
    margin: 0;
    text-align: center;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 75%);
  }
  .close {
    position: absolute;
    bottom: -10px;
    right: 0;
    left: 0;
    height: 40px;
    text-align: center;
  }
`