/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    REACT_APP_DOMAIN: string;
    REACT_APP_ANALYTICS_TRACKING_ID: string;
    REACT_APP_MAIL_KEY: string;
    REACT_APP_COLOUR_MODE_KEY: string;
    REACT_APP_CONTENTFUL_SPACE_ID: string;
    REACT_APP_CONTENTFUL_API_KEY: string;
  }
}