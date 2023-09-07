import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import closeIcon from "../Images/nav/closeIcon.png";
import menuIcon from "../Images/nav/menuIcon.png"
import './navBar.css';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={"navbar"}>
            <div className={"menu"}>
                <img
                className={"menuBtn"}
                src={
                    menuOpen
                    ? closeIcon
                    : menuIcon
                }
                alt="menu-button"
                onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul
                className={`${"menuItems"} ${menuOpen && menuOpen}`}
                onClick={() => setMenuOpen(false)}
                >
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Skills</a>
                </li>
                {/* <li>
                    <a href="#projects">Projects</a>
                </li> */}
                <li>
                    <a href="#contact">Contact</a>
                </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar