import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { StateContext } from "./hooks/StateContext.jsx"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <StateContext>
            <App />
        </StateContext>
    </Router>
);