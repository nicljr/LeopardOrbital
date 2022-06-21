import React from "react";
import { BsFillBookFill, BsFillFileMusicFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";

export const SidebarData = [{
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
    {
        title: 'Logout',
        path: "/logout",
        icon: < BiLogOut / > ,
        cName: "nav-text"
    },
]