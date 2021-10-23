import React from "react";
import logo from "../assets/icons/branding-large.png";

import Navigation from "./navigation";

export default function Header(props) {
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
            <Navigation title={props.data.title} />
        </header>
    );
}
