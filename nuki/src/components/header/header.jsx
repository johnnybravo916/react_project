import React from "react";
import "./header.scss";

import Navigation from "../navigation/navigation";

export default function Header(props) {
    return (
        <header>
            <a href="/" title={props.data.title}>
                {props.data.title}
            </a>
            <Navigation title={props.data.title} />
        </header>
    );
}
