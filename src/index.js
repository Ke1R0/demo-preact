import { h, render } from 'preact';
import { Provider } from 'preact-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducer from './components/reducer';

const store = createStore(reducer, {
  user: null,
  loading: true
}, applyMiddleware(thunk));

const config = {
  urls: {
    user: "https://api.github.com/users/shakyshane"
  }
};

render(
  <div>
    <Provider store={store}>
      <App config={config} />
    </Provider>
  </div>
  ,
  document.querySelector('main'));
