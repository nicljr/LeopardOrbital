//import { useState, useEffect } from "react";

import { useAuth } from "./hooks/useAuth";
import PageLogin from "./pages/PageLogin";
import MainMenu from "./pages/MainMenu";

import "./styles.css";

export default function App() {
    const { user } = useAuth();
    return <div className = "App" > { user ? < MainMenu / > : < PageLogin / > } < /div>;
}