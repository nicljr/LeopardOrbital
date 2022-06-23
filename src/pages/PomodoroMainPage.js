import React from "react";
import PomodoroMain from "./PomodoroMain";

const PomodoroMainPage = (props) => {
    const { updateConfigure, pomodoro, pomoBreak } = props;

    return ( <
        div className = "main__page" >
        <
        PomodoroMain updateConfigure = { updateConfigure }
        pomodoro = { pomodoro }
        pomoBreak = { pomoBreak }
        />  <
        /div>
    );
};

export default PomodoroMainPage;