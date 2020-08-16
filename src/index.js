import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter,useHistory} from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './Store/reducers';
import {SIGNIN} from './Store/action'
import 'bootstrap/dist/css/bootstrap.min.css'

const store = createStore(reducer)
const t = localStorage.getItem('usertoken')
if(t){
  const v = JSON.parse(t)
  store.dispatch({type : SIGNIN,val: v})
}
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  
  document.getElementById('root')
);

