import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './components/app/app';
import './global-styles.scss';
import { rootReducer } from './redux/reducers/root';

const composedEnhancers = process.env.NODE_ENV === 'production' ? compose(applyMiddleware(thunk)) : composeWithDevTools(applyMiddleware(thunk));
export const store = createStore(rootReducer, composedEnhancers);

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>, 
  document.getElementById('root')
);