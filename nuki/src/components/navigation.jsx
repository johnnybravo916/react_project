import React from "react";
import {v4 as uuid_v4} from "uuid";

export default function Navigation(props) {
    return (
        <nav>
            <ul>
                {Object.entries(props.nav.menu).map(([v, i]) => {
                    return (
                        <li key={uuid_v4()}>
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
