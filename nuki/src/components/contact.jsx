import React from "react";

export default function Contact(props) {
    return (
        <section id="contact" className="border-top center-content">
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

                <address>
                    email phone number
                    <a
                        href={props.data.address_link}
                        title={props.data.address}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {props.data.address}
                    </a>
                </address>
            </div>
        </section>
    );
}
