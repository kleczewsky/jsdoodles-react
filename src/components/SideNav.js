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
                <li
                    id="karty"
                    className={
                        activeDoodle === "karty"
                            ? "navIcon selected"
                            : "navIcon "
                    }
                    onClick={handleChange}
                >
                    <CardsIcon />
                    <p className="tooltip">Karty</p>
                </li>
                <li
                    id="samolot"
                    className={
                        activeDoodle === "samolot"
                            ? "navIcon selected"
                            : "navIcon "
                    }
                    onClick={handleChange}
                >
                    <PlaneIcon />
                    <p className="tooltip">Napis</p>
                </li>
                <li
                    id="terminal"
                    className={
                        activeDoodle === "terminal"
                            ? "navIcon selected"
                            : "navIcon "
                    }
                    onClick={handleChange}
                >
                    <SoftwareIcon />
                    <p className="tooltip">terminal</p>
                </li>
                <li
                    id="czas"
                    className={
                        activeDoodle === "czas"
                            ? "navIcon selected"
                            : "navIcon "
                    }
                    onClick={handleChange}
                >
                    <HourglassIcon />
                    <p className="tooltip">czas</p>
                </li>
            </ul>
        </div>
    );
}
