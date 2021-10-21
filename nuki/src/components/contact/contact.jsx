import React from "react";

export default function Contact(props) {
    return (
        <section
            id="contact"
            className="border-top border-bottom center-content"
        >
            <div className="contact">
                <h2>{props.data.title}</h2>
                <h3>{props.data.subheader}</h3>
                <ul>
                    {Object.entries(props.data.hours).map(([v, i]) => {
                        return (
                            <li>
                                {i.day} - {i.time}
                            </li>
                        );
                    })}
                </ul>
                <a
                    href={props.data.address_link}
                    title={props.data.address}
                    target="_blank"
                    rel="noreferrer"
                >
                    <address>{props.data.address}</address>
                </a>
            </div>
        </section>
    );
}
