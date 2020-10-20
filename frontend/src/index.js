import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Importar bootstrap
import 'bootstrap/dist/css/bootstrap.css';

// Css global para zerar
import './global.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
