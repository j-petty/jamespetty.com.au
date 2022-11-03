import React from 'react';
import ReactDOM from 'react-dom';

import App from 'components/App/App';
import MouseContextProvider from 'contexts/MouseContext';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <MouseContextProvider>
      <App />
    </MouseContextProvider>
  </React.StrictMode>
  , document.getElementById('root'));