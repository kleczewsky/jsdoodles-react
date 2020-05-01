import React from "react";

import DoodleKarty from "./DoodleKarty";
import "./DoodleContainer.css";

export default function DoodleContainer({ display }) {
    let element = () => {
        if (display === "karty") {
            return <DoodleKarty />;
        } else if (display === "terminal") {
            return <div className="Doodle"> react</div>;
        }
    };

    return <div className="DoodleContainer">{element()}</div>;
}
