import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import './global-styles.scss';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>, 
  document.getElementById('root')
);