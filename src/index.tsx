import React from 'react';
import ReactDOM from 'react-dom';

import App from 'components/App/App';
import MouseContextProvider from 'contexts/MouseContext';
import ColourContextProvider from 'contexts/ColourContext';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <ColourContextProvider>
      <MouseContextProvider>
        <App />
      </MouseContextProvider>
    </ColourContextProvider>
  </React.StrictMode>
  , document.getElementById('root'));