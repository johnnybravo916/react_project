import React from "react";

import Navigation from "../navigation/navigation";

export default function Header(props) {
    return (
        <header>
            {props.data.title}
            <Navigation title={props.data.title} />
        </header>
    );
}
