import React from 'react';
import ReactDOM from 'react-dom/client';
import { Login } from './components/Login/login';
import "./assets/styles/_commons.css";
import { PageWrapper } from './components/PageWrapper/pageWrapper';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PageWrapper children={<Login />} />
  </React.StrictMode>
);

