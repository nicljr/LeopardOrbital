//import { useState, useEffect } from "react";

import { useAuth } from "./hooks/useAuth";
import PageLogin from "./pages/PageLogin";
import PageTimer from "./pages/PageTimer";

import "./styles.css";

export default function App() {
    const { user } = useAuth();
    return <div className = "App" > { user ? < PageTimer / > : < PageLogin / > } < /div>;
}