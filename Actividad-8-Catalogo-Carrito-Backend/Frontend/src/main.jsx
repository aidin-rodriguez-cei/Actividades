import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; 
import App from '@/App';
import './css/catalogo.css';

import { UserProvider } from '@/hooks/useUser';

import { BrowserRouter as Router} from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </StrictMode>
);

