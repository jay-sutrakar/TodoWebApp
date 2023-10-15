import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './Store/reducers';
import { SIGNIN } from './Store/action'
import 'bootstrap/dist/css/bootstrap.min.css'

const store = createStore(reducer) // TODO : UNKNOWN
// localStorage allow you store key value pair in browser
const t = localStorage.getItem('usertoken') 
if(t){
  const v = JSON.parse(t)
  store.dispatch({type : SIGNIN,val: v})
}

ReactDOM.render(
  /**
   * The Provide compoment makes the redux store available to any
   * nested components that need to acess the redux store.
   */

  // Not sure, I really need the BrowserRouter 
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </Provider>,
  document.getElementById('root')
);

