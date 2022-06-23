//import { useState, useEffect } from "react";

import { useAuth } from "./hooks/useAuth";
import PageLogin from "./pages/PageLogin";
import MainMenu from "./pages/MainMenu";
import Pomodoro from "./pages/Pomodoro";
import RedirectPage from "./pages/RedirectPage";

import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css";

export default function App() {
    const { user } = useAuth();
    return <div className = "App" > { user ? < MainMenu / > : < PageLogin / > } < /div>;
}