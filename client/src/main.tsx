import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App/App';
import './index.css';
// import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  // <Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </Provider>,
  // </React.StrictMode>,
);
