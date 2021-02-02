import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '@/store'

import './assets/css/base.css'
import './assets/css/iconfont.css'
import 'braft-editor/dist/index.css'
import 'antd/dist/antd.css';

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter >
  ,
  document.getElementById('root')
);


