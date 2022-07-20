//import { useState, useEffect } from "react";

import { useAuth } from "./hooks/useAuth";
import PageLogin from "./pages/PageLogin";
import MainMenu from "./pages/MainMenu";
import Pomodoro from "./pages/Pomodoro";
import RedirectPage from "./pages/RedirectPage";

import Navbar from "./components/Navbar";

import Button from "@mui/material/Button";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
    const { user } = useAuth();
    return ( <
        div className = "App" >
        <
        AppShell / > { user ? < MainMenu / > : < PageLogin / > } < /div>);
    }

    function AppShell() {
        const { user, signout } = useAuth();

        const handleLogout = () => {
            signout();
        };

        return ( < div class = "innerdiv" >
            <
            Button variant = "contained"
            onClick = { handleLogout } > Log Out < /Button> < /
            div > );
    }