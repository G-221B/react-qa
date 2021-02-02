import styled from 'styled-components'

export const PublishWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 40px;
  background-color: #fff;
  overflow: auto;
  .header {
    display: flex;
    padding: 10px;
    border: 1px solid #e6e6e6;
    .title {
      margin: 0;
      margin-left: 6px;
      font-size: 18px;
      font-weight: normal;
    }
  }
  .box {
    padding: 10px 20px 30px 20px;
    border: 1px solid #e6e6e6;
    .q-title {
      margin-top: 10px;
      font-size: 18px;
    }
    .ant-select  {
      width: 15%;
      margin-left: 20px;
    }
    .type {
      padding: 20px 0;
      text-align: center;
    }
    .editor-wrapper {
      border: 1px solid #e6e6e6;
    }
    .btn-publish {
      text-align: center;
    }
  }
`