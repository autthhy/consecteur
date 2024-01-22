import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Loader from './Loader/Loader';

const MarkdownPreview = lazy(() => import('./App'));

const root = ReactDOM.createRoot(document.querySelector('#hey_app'));
root.render(
  <React.StrictMode>
    <React.Suspense fallback={<Loader />}>
      <MarkdownPreview />
    </React.Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
