import React from "react";

export default function Navigation(props) {
    return (
        <ul>
            <li>
                <a href="#hero" title={props.title}>
                    Home
                </a>
            </li>
            <li>
                <a href="#hello" title="Hello">
                    Hello
                </a>
            </li>
            <li>
                <a href="#eat" title="Eat">
                    Eat
                </a>
            </li>
            <li>
                <a href="#delivery" title="Delivery">
                    Delivery
                </a>
            </li>
            <li>
                <a href="#contact" title="Contact">
                    Contact
                </a>
            </li>
        </ul>
    );
}
