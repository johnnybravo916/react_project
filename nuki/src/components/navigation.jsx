import React from "react";

export default function Navigation(props) {
    return (
        <nav>
            <ul>
                {Object.entries(props.nav.menu).map(([v, i]) => {
                    return (
                        <li key={i}>
                            <a href={"#" + i.link} title={i.title}>
                                {i.title}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
