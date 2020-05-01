import React, { useEffect } from "react";

import { addivs as karty } from "../doodles/karty";
import "./DoodleKarty.css";

export default function Doodle() {
    let exiting = false;

    return (
        <div className="Doodle">
            <div id="rozdaj">
                <button onClick={() => karty(parseInt(prompt("Ile?", 5)))}>
                    Rozdaj karty
                </button>
            </div>
            <div id="deck"></div>
        </div>
    );
}
