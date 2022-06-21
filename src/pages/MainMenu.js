import Button from "@mui/material/Button";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import "./MainMenu.module.css";
import RedirectPage from "./RedirectPage";

function MainMenu() {

    return (

        <
        >
        <
        main >

        <
        video src = "/video/lofiBg.mp4"
        autoPlay loop muted / >

        <
        Router >
        <
        Navbar / >
        <
        Routes >
        <
        Route path = "/lofi"
        element = { < RedirectPage site = "https://www.lofi.cafe/" / > }
        />

        <
        Route path = "/nusmods"
        element = { < RedirectPage site = "https://nusmods.com/" / > }
        />

        <
        /Routes>    < /
        Router >

        <
        div className = "content" >


        <
        h1 > Main Menu < /h1>   <
        Button type = "submit"
        variant = "contained"
        color = "primary"
        size = "large" >
        Pomodoro Timer < /Button>

        <
        Button type = "submit"
        variant = "contained"
        color = "primary"
        size = "large" >
        Calender Planner <
        /Button>


        <
        /div>    

        <
        /main>    

        <
        />
    );
}

export default MainMenu;