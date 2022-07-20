import React from "react";
import { BsFillBookFill, BsFillFileMusicFill, BsFillMenuButtonWideFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { GiAlarmClock } from "react-icons/gi";
import { AiOutlineCalendar } from "react-icons/ai";

export const SidebarData = [{
        title: 'Main Menu',
        path: "/mainmenu",
        icon: < BsFillMenuButtonWideFill / > ,
        cName: "nav-text"
    },
    {
        title: 'Pomodoro Timer',
        path: "/pomodoro",
        icon: < GiAlarmClock / > ,
        cName: "nav-text"
    },
    {
        title: 'Calendar Planner',
        path: "/calendar",
        icon: < AiOutlineCalendar / > ,
        cName: "nav-text"
    },
    {
        title: 'LoFi Music',
        path: "/lofi",
        icon: < BsFillFileMusicFill / > ,
        cName: "nav-text"
    },
    {
        title: 'NUSMods',
        path: "/nusmods",
        icon: < BsFillBookFill / > ,
        cName: "nav-text"
    },
]