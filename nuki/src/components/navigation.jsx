import React from "react";

export default function Navigation(props) {
    return (
        <nav>
            <ul>
                <li>
                    <a href="#hero" title={props.title}>
                        home
                    </a>
                </li>
                <li>
                    <a href="#hello" title="hello">
                        hello
                    </a>
                </li>
                <li>
                    <a href="#eat" title="eat">
                        eat
                    </a>
                </li>
                <li>
                    <a href="#delivery" title="delivery">
                        delivery
                    </a>
                </li>
                <li>
                    <a href="#contact" title="contact">
                        contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}
