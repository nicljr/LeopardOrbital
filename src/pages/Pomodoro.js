import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./Pomodoro.scss";
import PomodoroMainPage from "./PomodoroMainPage";
import ConfigurePage from "./ConfigurePage";
// import CountDownSvg from "./CountDownSvg";

const Pomodoro = () => {
    const [isConfigure, setIsConfigure] = useState(false);
    const [pomodoro, setPomodoro] = useState(0);
    const [pomoBreak, setPomoBreak] = useState(0);
    const updateConfigure = (bool) => {
        setIsConfigure(bool);
    };
    const updatePomodoro = (_pomodoro, _pomoBreak) => {
        setPomodoro(_pomodoro);
        setPomoBreak(_pomoBreak);
    };
    //UseEffect to take eye on bool change
    useEffect(() => {
        setIsConfigure(isConfigure);
    }, [isConfigure]);
    return ( <
            div className = "app__section" >
            <
            PomodoroMainPage updateConfigure = { updateConfigure }
            pomodoro = { pomodoro }
            pomoBreak = { pomoBreak }
            /> {
            isConfigure && ( <
                ConfigurePage updateConfigure = { updateConfigure }
                updatePomodoro = { updatePomodoro }
                />
            )
        } <
        /div>
);
};

export default Pomodoro;