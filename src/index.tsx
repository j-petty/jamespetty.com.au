import React from 'react';
import ReactDOM from 'react-dom';
import dayjs from 'dayjs';

import relativeTime from 'dayjs/plugin/relativeTime';

import App from 'components/App/App';

import ColourContextProvider from 'contexts/ColourContext';
import ContentContextProvider from 'contexts/ContentContext';

import './index.scss';

// Apply dayjs extensions
dayjs.extend(relativeTime);

ReactDOM.render(
  <React.StrictMode>
    <ColourContextProvider>
      <ContentContextProvider>
        <App />
      </ContentContextProvider>
    </ColourContextProvider>
  </React.StrictMode>
  , document.getElementById('root'));