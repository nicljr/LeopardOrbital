import Button from "@mui/material/Button";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

import "./MainMenu.module.css";
import RedirectPage from "./RedirectPage";
import Pomodoro from "./Pomodoro";
import Schedule from "./Schedule";

function MainMenu() {

    return ( <
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
        Route exact path = "/pomodoro"
        element = { < Pomodoro / > }
        />

        <
        Route exact path = "/calendar"
        element = { < Schedule / > }
        />

        <
        Route path = "/lofi"
        exact element = { < RedirectPage site = "https://www.lofi.cafe/" / > }
        />

        <
        Route path = "/nusmods"
        exact element = { < RedirectPage site = "https://nusmods.com/" / > }
        />

        <
        /Routes>  

        <
        /Router>          < /
        main >

        <
        />
    );
}

export default MainMenu;