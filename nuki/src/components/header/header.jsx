import React from "react";

import Navigation from "../navigation/navigation";

export default function Header({props}) {

    return (
        <header>
            <div>{props.description}</div>
            <Navigation />
        </header>
    );
}
