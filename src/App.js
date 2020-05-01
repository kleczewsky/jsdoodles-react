import React, { useState } from "react";

import SideNav from "./components/SideNav";

import "./App.css";
import DoodleContainer from "./components/DoodleContainer";

function App() {
    const [activeDoodle, setActiveDoodle] = useState("none");

    function handleChange({ target }) {
        const targetId = target.id;
        setActiveDoodle(targetId);
    }

    return (
        <div className="jsDoodles">
            <SideNav handleChange={handleChange} activeDoodle={activeDoodle} />
            <DoodleContainer display={activeDoodle} />
        </div>
    );
}

export default App;
