import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

import App from './App';
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Pomodoro from "./pages/Pomodoro"
import MainMenu from "./pages/MainMenu";
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
    /ProvideAuth>       < /
    React.StrictMode >
);