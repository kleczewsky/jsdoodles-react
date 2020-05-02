import React from "react";

import { addivs as karty } from "../doodles/karty";
import "./DoodleKarty.css";

export default function Doodle({ classNames }) {
    return (
        <div className={classNames}>
            <div id="rozdaj">
                <button onClick={() => karty(parseInt(prompt("Ile?", 5)))}>
                    Rozdaj karty
                </button>
            </div>
            <div id="deck"></div>
        </div>
    );
}
