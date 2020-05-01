import React, { useState, useEffect } from "react";

import { ReactComponent as CardsIcon } from "../svg/playing-cards.svg";
import { ReactComponent as PlaneIcon } from "../svg/plane.svg";
import { ReactComponent as SoftwareIcon } from "../svg/software.svg";
import { ReactComponent as HourglassIcon } from "../svg/hourglass.svg";

import "./SideNav.css";

export default function SideNav({ handleChange, activeDoodle }) {
    return (
        <div className="SideNav">
            <div className="SideNav-logo">JS</div>

            <ul className="navItems">
                <li id="karty" className="navIcon" onClick={handleChange}>
                    <CardsIcon />
                </li>
                <li id="samolot" className="navIcon" onClick={handleChange}>
                    <PlaneIcon />
                </li>
                <li id="terminal" className="navIcon" onClick={handleChange}>
                    <SoftwareIcon />
                </li>
                <li id="czas" className="navIcon" onClick={handleChange}>
                    <HourglassIcon />
                </li>
            </ul>
        </div>
    );
}
