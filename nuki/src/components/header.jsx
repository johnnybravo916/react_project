import React, {useState} from "react";
import logo from "../assets/icons/branding-large.png";

import Navigation from "./navigation";

export default function Header(props) {
    const [showMainMenu, setShowMainMenu] = useState(true);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showMenuBttn, setShowMenuBttn] = useState(false);

    const handleMenuClick = () => {
        setShowMobileMenu(true);
    };

    window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        setShowMobileMenu(false);
        if (currentScrollPos > 100) {
            setShowMainMenu(false);
            setShowMenuBttn(true);
        } else {
            setShowMainMenu(true);
            setShowMenuBttn(false);
        }
    };

    return (
        <header>
            <a href="/" className="branding" title={props.data.title}>
                <img
                    src={logo}
                    alt={props.data.title}
                    title={props.data.title}
                />
                {props.data.title}
            </a>
            <div
                className={`menu-desktop ${
                    showMainMenu ? null : "js-inactive"
                }`}
            >
                <Navigation title={props.data.title} />
            </div>
            <strong
                className={`js-menu bttn--menu ${
                    showMenuBttn ? "js-active" : null
                }`}
                onClick={handleMenuClick}
            >
                Menu
            </strong>
            <div
                className={`menu-responsive ${
                    showMobileMenu ? "js-active" : null
                }`}
            >
                <Navigation title={props.data.title} />
            </div>
        </header>
    );
}
