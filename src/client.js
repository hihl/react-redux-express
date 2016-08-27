/**
  * Created by Zhengfeng Yao on 16/8/27.
  */
import 'babel-polyfill';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import domReady from 'domready';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import reducers from './reducers';
import { createStore } from './utils';
import routes from './routes';
import DevTools from './devtools';
const store = createStore(reducers);

function windowHeight() {
  var de = document.documentElement;
  return self.innerHeight||(de && de.clientHeight)||document.body.clientHeight;
}

window.onload = window.onresize=function(){
  document.getElementById('content').style.height = `${windowHeight()}px`;
};

const history = syncHistoryWithStore(browserHistory, store);
domReady(() => {
  ReactDOM.render(
    <Provider store={store}>
      <div>
        <Router history={history}>
          {routes}
        </Router>
        {
          __DEV__ && DevTools
        }
      </div>
    </Provider>, document.getElementById('content')
  );
});
