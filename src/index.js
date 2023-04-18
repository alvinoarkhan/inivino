import React from 'react'
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import RouteP from './Components/Portofolio/apps/route1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(    
    <React.StrictMode>
        <BrowserRouter >
            <RouteP/>
        </BrowserRouter>
    </React.StrictMode>
  
    );

reportWebVitals();