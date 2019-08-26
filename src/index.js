import React from 'react';
import ReactDOM from 'react-dom';
import './Sass/index.scss';
import App from './Components/App/App';
import  { BrowserRouter } from 'react-router-dom';
import 'normalize.css';

const router = (
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);

ReactDOM.render(router, document.getElementById('root'));