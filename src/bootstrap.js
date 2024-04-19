import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MyComponent from './MyComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>Hello from mf2</div>
    <MyComponent />
  </React.StrictMode>
);

// reportWebVitals();