import React from "react";

import DoodleKarty from "./DoodleKarty";
import DoodleExplode from "./DoodleExplode";
import "./DoodleContainer.css";

export default function DoodleContainer({ display, prevDoodle }) {
    const element = () => {
        switch (display) {
            case "karty":
                return <DoodleKarty classNames="Doodle active" />;
            case "samolot":
                return <DoodleExplode classNames="Doodle active" />;
            case "terminal":
                return (
                    <div className="Doodle active">
                        <h1>Coming soon...</h1>
                    </div>
                );
            case "czas":
                return (
                    <div className="Doodle active">
                        <h1>Coming soon...</h1>
                    </div>
                );

            default:
                break;
        }
    };

    const prevElement = () => {
        switch (prevDoodle) {
            case display:
                break;
            case "karty":
                return <DoodleKarty classNames="Doodle exit" />;
            case "samolot":
                return <DoodleExplode classNames="Doodle exit" />;
            case "terminal":
                return (
                    <div className="Doodle exit">
                        <h1>Coming soon...</h1>
                    </div>
                );
            case "czas":
                return (
                    <div className="Doodle exit">
                        <h1>Coming soon...</h1>
                    </div>
                );

            default:
                break;
        }
    };
    return (
        <div className="DoodleContainer">
            {element()}
            {prevElement()}
        </div>
    );
}
