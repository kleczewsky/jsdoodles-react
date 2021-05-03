import React, { useEffect } from "react";

import "./DoodleExplode.css";
import { ReactComponent as Explodee } from "../doodles/kleczewskyOps.svg";
import { setupLettersForExplode as explode } from "../doodles/explodingWord";

export default function Doodle({ classNames }) {
    useEffect(() => {
        explode();
    }, []);

    return (
        <div className={classNames}>
            <div className="explode-wrapper">
                <div className="box2">
                    <div className="box3">
                        <span className="charhitbox s">S</span>
                        <span className="charhitbox k">K</span>
                        <span className="charhitbox y">Y</span>
                    </div>
                    <Explodee />
                </div>
            </div>
        </div>
    );
}
