import styled from 'styled-components'

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 55px;
  .home-main {
    min-height: calc(100vh - 55px - 40px);
    padding: 20px 0;
    overflow: auto;
    background-color: #f4f6f8;
  }
`