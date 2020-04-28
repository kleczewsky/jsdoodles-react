import React, { useState, useEffect } from "react";

export default function SideNav() {
    return (
        <div className="SideNav">
            <div className="SideNav-logo">JS</div>

            <ul className="navItems">
                <li className="navIcon">1</li>
                <li className="navIcon">2</li>
                <li className="navIcon">3</li>
                <li className="navIcon">4</li>
            </ul>
        </div>
    );
}
