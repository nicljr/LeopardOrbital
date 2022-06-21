import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';
import CssBaseline from "@mui/material/CssBaseline";

import { ProvideAuth } from './hooks/useAuth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <
    React.StrictMode >
    <
    CssBaseline / >
    <
    ProvideAuth >
    <
    App / >
    <
    /ProvideAuth>       <
    /React.StrictMode>
);