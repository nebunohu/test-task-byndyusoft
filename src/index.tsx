import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './components/app/app';
import './global-styles.scss';
import { rootReducer } from './redux/reducers/root';

const composedEnhancers = composeWithDevTools(applyMiddleware(thunk));
export const store = createStore(rootReducer, composedEnhancers);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>, 
  document.getElementById('root')
);