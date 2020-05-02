import React from "react";

import DoodleKarty from "./DoodleKarty";
import "./DoodleContainer.css";

export default function DoodleContainer({ display }) {
    const element = () => {
        if (display === "karty") {
            return (
                <>
                    <DoodleKarty classNames="Doodle active" />

                    <div className="Doodle exit">
                        <h1>Coming soon...</h1>
                    </div>
                </>
            );
        } else if (display === "samolot") {
            return (
                <>
                    <DoodleKarty classNames="Doodle exit" />

                    <div className="Doodle active">
                        <h1>Coming soon...</h1>
                    </div>
                </>
            );
        } else if (display === "terminal") {
            return (
                <>
                    <DoodleKarty classNames="Doodle exit" />

                    <div className="Doodle active">
                        <h1>Coming soon...</h1>
                    </div>
                </>
            );
        } else if (display === "czas") {
            return (
                <>
                    <DoodleKarty classNames="Doodle exit" />

                    <div className="Doodle active">
                        <h1>Coming soon...</h1>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <DoodleKarty classNames="Doodle exit" />
                    <div className="Doodle exit" />
                </>
            );
        }
    };

    return <div className="DoodleContainer">{element()}</div>;
}
