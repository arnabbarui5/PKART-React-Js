import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"; 
import {ProductProvider} from "./context";
import * as serviceWorker from './serviceWorker';
import 'font-awesome/css/font-awesome.min.css';
import FooterPage from './Footer';

ReactDOM.render(
  <ProductProvider>
    <Router>
    <App />
    <FooterPage />
    </Router>
  </ProductProvider>,
  document.getElementById('root')
);
serviceWorker.unregister();
