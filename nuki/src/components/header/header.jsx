import React from "react";

import Navigation from "../navigation/navigation";

export default function Header(props) {

    return (
        <header>
            {props.loading ? "loading" : 
            props.data.title
            }
            <Navigation />
        </header>
    );
}
